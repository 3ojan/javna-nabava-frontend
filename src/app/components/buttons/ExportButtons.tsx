import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyledColoredButton, StyledSpace } from './styled';
import { mobileWidth } from 'src/app/global/constants';
import { useSelector } from 'react-redux';
import { TransparencyState } from 'src/redux/transparency/transparency';

export type exportButtonProps = {
  xmlVisible: boolean;
  csvVisible: boolean;
  jsonVisible: boolean;
  onChangeWidth?: () => void;
};

export default function ExportButtons(exportButtonProps: exportButtonProps) {
  const { xmlVisible, csvVisible, jsonVisible } = exportButtonProps;
  const [xmlText, setXmlText] = useState(
    window.innerWidth <= mobileWidth ? 'XML' : 'Preuzmi XML'
  );

  const transparencyState = useSelector(
    (state: any) => state.transparency as TransparencyState
  );

  const handleResize = () => {
    setXmlText(window.innerWidth <= mobileWidth ? 'XML' : 'Preuzmi XML');
  };

  const handleDownloadJSON = () => {
    // Convert the JSON object to a string with pretty formatting (2 spaces for indentation)
    const jsonData = JSON.stringify(transparencyState.data, null, 2);

    // Create a Blob object containing the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a URL for the Blob
    const blobURL = URL.createObjectURL(blob);

    // Create a temporary anchor element for downloading
    const a = document.createElement('a');
    a.href = blobURL;
    a.download = '.json'; // Name of the downloaded file

    // Trigger a click event to initiate the download
    a.click();

    // Revoke the URL to release resources
    URL.revokeObjectURL(blobURL);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <p
        style={{
          textAlign: 'center',
          width: '100%',
          display: window.innerWidth <= mobileWidth ? 'block' : 'none',
        }}
      >
        Preuzmite podatke u obliku:
      </p>
      <div className="buttonWrapper">
        {xmlVisible && (
          <StyledColoredButton disabled={false} $color="green">
            {window.innerWidth <= mobileWidth ? 'XML' : 'Preuzmi XML'}
          </StyledColoredButton>
        )}
        {csvVisible && (
          <Button>
            {window.innerWidth <= mobileWidth ? 'CSV' : 'Preuzmi CSV'}
          </Button>
        )}
        {jsonVisible && (
          <Button danger type="primary" onClick={handleDownloadJSON}>
            {window.innerWidth <= mobileWidth ? 'JSON' : 'Preuzmi JSON'}
          </Button>
        )}
      </div>
    </>
  );
}

ExportButtons.defaultProps = {
  xmlVisible: true,
  csvVisible: true,
  jsonVisible: true,
};

import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { mobileScreenWidth } from 'src/app/global/constants';
import { StyledColoredButton } from './styled';

export type exportButtonProps = {
  xmlVisible: boolean;
  csvVisible: boolean;
  jsonVisible: boolean;
  selectedYear: string;
  placeName: string;
  dataForExport: any;
  onChangeWidth?: () => void;
};

export default function ExportButtons(exportButtonProps: exportButtonProps) {
  const {
    xmlVisible,
    csvVisible,
    jsonVisible,
    selectedYear,
    placeName,
    dataForExport,
  } = exportButtonProps;
  const [xmlText, setXmlText] = useState(
    window.innerWidth <= mobileScreenWidth ? 'XML' : 'Preuzmi XML'
  );

  // const transparencyState = useSelector(
  //   (state: any) => state.transparency as TransparencyState
  // );

  const handleResize = () => {
    setXmlText(window.innerWidth <= mobileScreenWidth ? 'XML' : 'Preuzmi XML');
  };

  const handleDownloadJSON = () => {
    // Convert the JSON object to a string with pretty formatting (2 spaces for indentation)
    const jsonData = JSON.stringify(dataForExport, null, 2);
    const currentDate: Date = new Date();
    const currentMonth = currentDate.getMonth() + 1; // months are 0-indexed

    // Create a Blob object containing the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });
    // Create a URL for the Blob
    const blobURL = URL.createObjectURL(blob);

    // Create a temporary anchor element for downloading
    const a = document.createElement('a');
    a.href = blobURL;
    a.download = `${placeName}_isplate_iz_proracuna_${selectedYear}_godine_
    ${currentDate.getDate()}.${currentMonth}.${currentDate.getFullYear()}.json`;

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
      {/* <p
        style={{
          textAlign: 'center',
          width: '100%',
          display: window.innerWidth <= mobileScreenWidth ? 'block' : 'none',
        }}
      >
        Preuzmite podatke u obliku:
      </p> */}
      <div className="buttonWrapper">
        {xmlVisible && (
          <StyledColoredButton disabled={false} $color="green">
            {window.innerWidth <= mobileScreenWidth ? 'XML' : 'Preuzmi XML'}
          </StyledColoredButton>
        )}
        {csvVisible && (
          <Button>
            {window.innerWidth <= mobileScreenWidth ? 'CSV' : 'Preuzmi CSV'}
          </Button>
        )}
        {jsonVisible && (
          <Button
            icon={<DownloadOutlined />}
            type="default"
            onClick={handleDownloadJSON}
          >
            {window.innerWidth <= mobileScreenWidth ? 'JSON' : 'Preuzmi JSON'}
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

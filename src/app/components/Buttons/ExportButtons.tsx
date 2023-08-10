import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyledColoredButton, StyledSpace } from './styled';
import { mobileWidth } from 'src/app/global/constants';

export type exportButtonProps = {
  xmlVisible: boolean;
  csvVisible: boolean;
  jsonVisible: boolean;
  onChangeWidth?: () => void;
};

export default function ExportButtons(exportButtonProps: exportButtonProps) {
  const { xmlVisible, csvVisible, jsonVisible } = exportButtonProps;
  //nakon dodavanja jednog useStatea, rade svi stateovi
  const [xmlText, setXmlText] = useState(
    window.innerWidth <= mobileWidth ? 'XML' : 'Preuzmi XML'
  );

  const handleResize = () => {
    setXmlText(window.innerWidth <= mobileWidth ? 'XML' : 'Preuzmi XML');
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
          <Button danger type="primary">
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

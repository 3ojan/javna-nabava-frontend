import { Button, Space } from 'antd';
import React from 'react';
import { ColoredButton } from './styled';

export type exportButtonProps = {
  xmlVisible: boolean;
  csvVisible: boolean;
  jsonVisible: boolean;
};

export default function ExportButtons(exportButtonProps: exportButtonProps) {
  const { xmlVisible, csvVisible, jsonVisible } = exportButtonProps;

  return (
    <div className="buttonWrapper">
      <Space wrap>
        {xmlVisible && (
          <ColoredButton disabled={false} $color="green">
            Preuzmi XML
          </ColoredButton>
        )}
        {csvVisible && <Button>Preuzmi CSV</Button>}
        {jsonVisible && (
          <Button danger type="primary">
            Preuzmi JSON
          </Button>
        )}
      </Space>
    </div>
  );
}

ExportButtons.defaultProps = {
  xmlVisible: true,
  csvVisible: true,
  jsonVisible: true,
};

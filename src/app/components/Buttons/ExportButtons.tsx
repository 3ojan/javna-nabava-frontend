import { Button } from "antd";
import React from "react";
import { GreenButton } from "./styled";

export type exportButtonProps = {
  xmlVisible: boolean,
  csvVisible: boolean,
  jsonVisible: boolean,
};


export default function ExportButtons(exportButtonProps: exportButtonProps) {
  const { xmlVisible, csvVisible, jsonVisible } = exportButtonProps;
  return (
    <div>
      {xmlVisible && <GreenButton disabled={false}>Preuzmi XML</GreenButton>}
      {csvVisible && <Button>Preuzmi CSV</Button>}
      {jsonVisible && <Button danger type="primary" >Preuzmi JSON</Button>}
    </div>
  );
}

ExportButtons.defaultProps = {
  xmlVisible: true,
  csvVisible: true,
  jsonVisible: true,
}

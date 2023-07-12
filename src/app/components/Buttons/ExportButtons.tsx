import { Button } from "antd";
import React from "react";
import { GreenButton } from "./styled";

export default function ExportButtons() {
  return (
    <div>
      <GreenButton disabled={false}>Preuzmi XML</GreenButton>
      <Button>Preuzmi CSV</Button>
      <Button danger type="primary" >Preuzmi JSON</Button>
    </div>
  );
}

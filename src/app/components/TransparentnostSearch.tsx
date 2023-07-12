import { Button, Input, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { GreenButton } from "./Buttons/styled";

export default function TransparentnostSearch(props: any) {
  const { Search } = Input
  const { buttonEnabled, onChangeInput, searchValue } = props;

  return (
    <Layout>
      <Content id="MainContent">
        <h1 id="Title">Transparentnost</h1>
        <Search
          placeholder="Upišite ključnu riječ..."
          enterButton={<GreenButton disabled={searchValue === ""} >Pretraži</GreenButton>}
          size="large"
          onChange={onChangeInput}
          value={searchValue}
        />
        <Button type="text">Detaljnija pretraga</Button>
      </Content>
    </Layout>
  );
}

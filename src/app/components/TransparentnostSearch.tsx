import { Button, Input, Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export default function TransparentnostSearch() {
  const { Search } = Input;

  return (
    <Layout>
      <Content id="MainContent">
        <h1 id="Title">Transparentnost</h1>
        <Search
          placeholder="Upišite ključnu riječ..."
          enterButton="Pretraži"
          size="large"
        />
        <Button type="text">Detaljnija pretraga</Button>
      </Content>
    </Layout>
  );
}

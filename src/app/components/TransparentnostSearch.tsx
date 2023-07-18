import { Button, Input, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ColoredButton } from './buttons/styled';
import { MainTitleH1 } from './styledComponents/MainTitleH1';
import { TransparencyContent } from './styledComponents/TransparencyContent';
import { FullWidthDiv } from './styledComponents/FullWidthDiv';

export default function TransparentnostSearch(props: any) {
  const { Search } = Input;
  const {
    onChangeInput,
    searchValueonSearchClick,
    searchValue,
    onSearchClick,
  } = props;

  return (
    <TransparencyContent>
      <MainTitleH1 $center>Transparentnost</MainTitleH1>
      <Search
        placeholder="Upišite ključnu riječ..."
        enterButton={
          <ColoredButton disabled={searchValue === ''} onClick={onSearchClick}>
            Pretraži
          </ColoredButton>
        }
        size="large"
        onChange={onChangeInput}
        value={searchValue}
      />
      <Button className="detailedSearchButton" type="text">
        Detaljnija pretraga
      </Button>
    </TransparencyContent>
  );
}

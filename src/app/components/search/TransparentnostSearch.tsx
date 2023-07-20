import { Button, Input, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ColoredButton } from '../buttons/styled';
import { MainTitleH1 } from '../general/styled.ts';
import { TransparencyContent } from '../search/styled.ts';
import { FullWidthDiv } from '../general/styled';

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
      <MainTitleH1 $center>
        {/* <a href=""> */}Transparentnost{/* </a> */}
      </MainTitleH1>
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

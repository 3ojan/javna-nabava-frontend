import { Button, Input, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ColoredButton } from '../buttons/styled';
import { MainTitleH1 } from '../general/styled.ts';
import { TransparencyContent, TransparencyLayout } from '../search/styled.ts';

export default function TransparentnostSearch(props: any) {
  const { Search } = Input;
  const {
    onChangeInput,
    searchValueonSearchClick,
    searchValue,
    onSearchClick,
    className,
  } = props;

  return (
    <TransparencyLayout>
      <TransparencyContent
        breakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        <div className={className}>
          <MainTitleH1 $center>
            <img src="../../../../img/grb.png" alt="" />
            {/* <a href=""> */}Transparentnost{/* </a> */}
          </MainTitleH1>
          <Search
            placeholder="Upišite ključnu riječ..."
            enterButton={
              <ColoredButton
                disabled={searchValue === ''}
                onClick={onSearchClick}
              >
                Pretraži
              </ColoredButton>
            }
            size="large"
            onChange={onChangeInput}
            value={searchValue}
          />
          {/* <Button className="detailedSearchButton" type="text">
          Detaljnija pretraga
        </Button> */}
        </div>
      </TransparencyContent>
    </TransparencyLayout>
  );
}

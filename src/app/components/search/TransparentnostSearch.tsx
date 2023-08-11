import { Button, Input, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { StyledColoredButton } from '../buttons/styled';
import { StyledMainTitleH1 } from '../general/styled.ts';
import {
  StyledTransparencyContent,
  StyledTransparencyLayout,
} from '../search/styled.ts';

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
    <StyledTransparencyLayout>
      <StyledTransparencyContent
        breakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        <div className={className}>
          <StyledMainTitleH1 $center>
            <img src="../../../../img/grb.png" alt="" />
            {/* <a href=""> */}Transparentnost{/* </a> */}
          </StyledMainTitleH1>
          <Search
            placeholder="Upišite ključnu riječ..."
            enterButton={
              <StyledColoredButton
                disabled={searchValue === ''}
                onClick={onSearchClick}
              >
                Pretraži
              </StyledColoredButton>
            }
            size="large"
            onChange={onChangeInput}
            value={searchValue}
          />
          {/* <Button className="detailedSearchButton" type="text">
          Detaljnija pretraga
        </Button> */}
        </div>
      </StyledTransparencyContent>
    </StyledTransparencyLayout>
  );
}

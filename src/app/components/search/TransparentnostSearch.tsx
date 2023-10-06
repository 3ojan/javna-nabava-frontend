import { Input, Select } from 'antd';
import { StyledColoredButton } from '../buttons/styled';
import { StyledMainTitleH1 } from '../general/styled.ts';
import {
  StyledTransparencyContent,
  StyledTransparencyLayout,
} from '../search/styled.ts';
import { StyledSearchBar } from '../table/styled';

export default function TransparentnostSearch(props: any) {
  const { Option } = Select;
  const { Search } = Input;
  const {
    onChangeInput,
    searchValueonSearchClick,
    searchValue,
    selectedYear,
    onYearSelect,
    onSearchClick,
    className,
    buttonEnabled,
  } = props;
  const selectYear = (
    <Select
      placeholder="odaberite godinu"
      showSearch
      options={[
        {
          value: '2023',
          label: '2023',
        },
        {
          value: '2022',
          label: '2022',
        },
        {
          value: '2021',
          label: '2021',
        },
        {
          value: '2020',
          label: '2020',
        },
      ]}
    ></Select>
  );

  return (
    <StyledTransparencyLayout>
      <StyledTransparencyContent
      // breakpoint="lg"
      // onBreakpoint={(broken) => {
      //   console.log(broken);
      // }}
      >
        <div className={className}>
          <StyledMainTitleH1 $center>
            <img src="../../../../img/grb.png" alt="" />
            {/* <a href=""> */}Transparentnost{/* </a> */}
          </StyledMainTitleH1>
          {/* <Search
            style={{ padding: '0' }}
            placeholder="Upišite ključnu riječ..."
            addonBefore={selectYear}
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
          /> */}
          <StyledSearchBar>
            <Input
              placeholder="Upišite ključnu riječ..."
              // onSearch={handleSearch}
              onChange={onChangeInput}
              className="search-input"
            />
            <Select
              rootClassName="dropdown"
              // defaultValue={selectedOption}
              // onChange={handleOptionChange}
              className="dropdown"
              showSearch
              defaultValue={'odaberite godinu'}
              onChange={onYearSelect}
              options={[
                {
                  value: '2023',
                  label: '2023',
                },
                {
                  value: '2022',
                  label: '2022',
                },
                {
                  value: '2021',
                  label: '2021',
                },
                {
                  value: '2020',
                  label: '2020',
                },
              ]}
            ></Select>
            <StyledColoredButton
              disabled={!buttonEnabled}
              onClick={onSearchClick}
              type="primary"
              className="search-button"
            >
              Pretraži
            </StyledColoredButton>
          </StyledSearchBar>
          {/* <Button className="detailedSearchButton" type="text">
          Detaljnija pretraga
        </Button> */}
        </div>
      </StyledTransparencyContent>
    </StyledTransparencyLayout>
  );
}

import { Input, Select } from 'antd';
import { StyledSearchBar } from './table/styled.ts';
import {
  StyledTransparencyContent,
  StyledTransparencyLayout,
} from './search/styled.ts';
import { StyledColoredButton } from './buttons/styled.ts';
import { StyledMainTitleH1 } from './general/styled.ts';

export default function TransparentnostSearch(props: any) {
  const { Option } = Select;
  const { Search } = Input;
  const {
    onChangeInput,
    searchValueonSearchClick,
    searchValue,
    currentYear,
    onYearSelect,
    onSearchClick,
    className,
    buttonEnabled,
  } = props;

  return (
    <StyledTransparencyLayout>
      <StyledTransparencyContent>
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
            {/* this vanilla select is if the antd one doesnt style properly*/}
            {/* <select>
              <option value="2023">2023</option>
              <option value="2023">2022</option>
              <option value="2023">2021</option>
              <option value="2023">2020</option>
            </select> */}
            <Select
              rootClassName="dropdown"
              defaultValue={currentYear}
              className="dropdown"
              onChange={onYearSelect}
              options={[
                {
                  value: currentYear,
                  label: currentYear,
                },
                {
                  value: currentYear - 1,
                  label: currentYear - 1,
                },
                {
                  value: currentYear - 2,
                  label: currentYear - 2,
                },
                {
                  value: currentYear - 3,
                  label: currentYear - 3,
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
        </div>
      </StyledTransparencyContent>
    </StyledTransparencyLayout>
  );
}

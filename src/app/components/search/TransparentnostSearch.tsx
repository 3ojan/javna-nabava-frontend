import { Input, Select } from 'antd';
import { StyledMainTitleH1 } from '../general/styled.ts';
import {
  StyledTransparencyContent,
  StyledTransparencyLayout,
} from '../search/styled.ts';
import { StyledSearchBar } from '../table/styled.ts';
import { DefaultOptionType } from 'antd/es/select/index';

export default function TransparentnostSearch(props: any) {
  const { Option } = Select;
  const { Search } = Input;
  const {
    onSelectYear,
    onChangeInput,
    currentYear,
    onYearSelect,
    className,
    availableYears,
    isplatiteljs,
    searchValueonSearchClick,
    searchValue,
    onSearchClick,
    buttonEnabled,
  } = props;

  const selectYearOptions = (): DefaultOptionType[] => {
    const yearOptions: DefaultOptionType[] = [];

    availableYears.forEach((year: string) => {
      // yearOptions.push(<Option value={year}>{year}</Option>);
      yearOptions.push({
        value: year,
        label: year,
      });
    });
    return yearOptions;
  };

  return (
    <StyledTransparencyLayout>
      <StyledTransparencyContent>
        <div className={className}>
          <StyledMainTitleH1 $center>
            <img src="../../../../img/grb.png" alt="" />
            {/* <a href=""> */}Transparentnost{/* </a> */}
          </StyledMainTitleH1>
          <StyledSearchBar>
            <Input
              // onBlur={onLoseFocus}
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
              onSelect={onSelectYear}
              rootClassName="dropdown"
              defaultValue={currentYear}
              className="dropdown"
              onChange={onYearSelect}
              options={selectYearOptions()}
            ></Select>
          </StyledSearchBar>
        </div>
      </StyledTransparencyContent>
    </StyledTransparencyLayout>
  );
}

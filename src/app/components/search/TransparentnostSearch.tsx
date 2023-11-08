import { Input, Select } from 'antd';
import {
  StyledTransparencyContent,
  StyledTransparencyLayout,
} from '../search/styled.ts';
import { StyledSearchBar } from '../search/styled.ts';
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
          <StyledSearchBar>
            <Input
              placeholder="Upišite ključnu riječ..."
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
              // rootClassName="dropdown"
              defaultValue={currentYear}
              className="customDropdown"
              onChange={onYearSelect}
              options={selectYearOptions()}
            ></Select>
          </StyledSearchBar>
        </div>
      </StyledTransparencyContent>
    </StyledTransparencyLayout>
  );
}

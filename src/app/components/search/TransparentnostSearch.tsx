import { Input, Select } from 'antd';
import {
  StyledSelectWrapper,
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
        <StyledSearchBar>
          <Input
            placeholder="Upišite ključnu riječ..."
            onChange={onChangeInput}
            className="search-input"
          />
          <StyledSelectWrapper>
            <Select
              onSelect={onSelectYear}
              defaultValue={currentYear}
              onChange={onYearSelect}
              options={selectYearOptions()}
            ></Select>
          </StyledSelectWrapper>
        </StyledSearchBar>
      </StyledTransparencyContent>
    </StyledTransparencyLayout>
  );
}

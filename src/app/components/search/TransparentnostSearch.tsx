import { Input, Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select/index';
import {
  StyledSearchBar,
  StyledSelectWrapper,
  StyledTransparencyContent,
  StyledTransparencyLayout,
} from '../search/styled.ts';

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
              // size="large"
            ></Select>
          </StyledSelectWrapper>
        </StyledSearchBar>
      </StyledTransparencyContent>
    </StyledTransparencyLayout>
  );
}

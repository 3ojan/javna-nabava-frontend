import { Input, Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select/index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TransparencyState } from 'src/redux/transparency/transparency.ts';
import {
  StyledSearchBar,
  StyledSelectWrapper,
  StyledTransparencyContent,
  StyledTransparencyLayout,
} from '../search/styled.ts';

export default function TransparentnostSearch(props: any) {
  const [latestYearOption, setLatestYearOption] = useState<string>();
  const [availableYearsOptions, setAvailableYearsOptions] =
    useState<DefaultOptionType[]>();

  const transparencyState = useSelector((state: any) => {
    return state.transparency as TransparencyState;
  });

  const { availableYears, selectedYear } =
    transparencyState as TransparencyState;
  const { Option } = Select;
  const { Search } = Input;
  const { onChangeInput, currentYear, onYearChange } = props;

  const fillSelectYearOptions = () /* : DefaultOptionType[] */ => {
    const yearOptions: DefaultOptionType[] = [];

    availableYears.forEach((year: string) => {
      yearOptions.push({
        value: year,
        label: year,
      });
    });
    // return yearOptions;
    setLatestYearOption(yearOptions[0].value as string);

    setAvailableYearsOptions(yearOptions);
    console.log('availableYearsOptions', availableYearsOptions);
  };

  useEffect(() => {
    if (availableYears.length > 0) {
      fillSelectYearOptions();
    }
  }, [availableYears]);

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
              // onSelect={onSelectYear}
              // defaultValue={selectedYear}
              value={selectedYear || latestYearOption}
              onChange={onYearChange}
              options={availableYearsOptions} //selectYearOptions()
              // size="large"
            ></Select>
          </StyledSelectWrapper>
        </StyledSearchBar>
      </StyledTransparencyContent>
    </StyledTransparencyLayout>
  );
}

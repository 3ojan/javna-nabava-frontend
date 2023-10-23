import { Col, Row } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable from '../components/table/ResultTable';
import {
  TransparencyState,
  changeSearchBarValue,
  changeSelectedYearValue,
  getSearchData,
  getData,
} from 'src/redux/transparency/transparency';
import { useEffect, useMemo, useState } from 'react';
import { StyledFullWidthDiv } from '../components/general/styled.ts';
import ExportButtons from '../components/buttons/ExportButtons';
import { AppDispatch } from 'src/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { StyledExportButtonsDiv } from 'src/app/components/buttons/styled.ts';

function TransparencyHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowAninm, setIsShowAninm] = useState(false);
  const [isShortened, setIsShortened] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const transparencyState = useSelector((state: any) => {
    return state.transparency as TransparencyState;
  });

  const { data, searchValue, selectedYear } =
    transparencyState as TransparencyState;

  const onChange = (e: any) => {
    dispatch(changeSearchBarValue(e.target.value) as any);
  };
  const onSearch = (e: any) => {
    dispatch(getSearchData(selectedYear, searchValue) as any);
  };
  const onYearChange = (e: any) => {
    dispatch(changeSelectedYearValue(e) as any);
  };
  const onLoseFocus = (e: any) => {
    //gets default data
    dispatch(getData(selectedYear) as any);
  };

  const currentYear = useMemo(() => {
    return parseInt(selectedYear);
  }, []);

  useEffect(() => {
    // This effect runs after the initial render
    if (
      searchValue === '' ||
      searchValue === undefined ||
      searchValue === null
    ) {
      //gets default data
      dispatch(getData(selectedYear) as any);
    }
  }, [selectedYear]);

  useEffect(() => {
    dispatch(getData(selectedYear) as any);
  }, []);

  return (
    <>
      <StyledFullWidthDiv $padding $background>
        <Col>
          <Row>
            <TransparentnostSearch
              onLoseFocus={onLoseFocus}
              buttonEnabled={searchValue !== '' && selectedYear !== ''}
              currentYear={currentYear}
              onChangeInput={onChange}
              onSearchClick={onSearch}
              onYearSelect={onYearChange}
            />
          </Row>
          <Row>
            <StyledExportButtonsDiv>
              <ExportButtons csvVisible={false} xmlVisible={false} />
            </StyledExportButtonsDiv>
          </Row>
          <Row>
            <ResultTable data={data} />
          </Row>
        </Col>
      </StyledFullWidthDiv>
    </>
  );
}

export default TransparencyHome;

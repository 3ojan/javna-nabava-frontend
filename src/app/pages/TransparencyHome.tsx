import { Col, Row } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable from '../components/table/ResultTable';
// import { useDispatch, useSelector } from 'react-redux';

import {
  TransparencyState,
  changeSearchBarValue,
  changeSelectedYearValue,
  getData,
  getSearchData,
} from 'src/redux/transparency/transparency';
import { useEffect, useState } from 'react';
import { StyledFullWidthDiv } from '../components/general/styled';
import ExportButtons from '../components/buttons/ExportButtons';
import { StyledExportButtonsDiv } from '../components/buttons/styled';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

function TransparencyHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowAninm, setIsShowAninm] = useState(false);
  const [isShortened, setIsShortened] = useState(false);

  const transparencyState = useAppSelector((state) => {
    return state.transparency;
  });

  const dispatch = useAppDispatch();

  const onChange = (e: any) => {
    dispatch(changeSearchBarValue(e.target.value) as any);
  };
  const onSearch = (e: any) => {
    dispatch(getSearchData(searchValue) as any);
  };
  const onYearChange = (e: any) => {
    dispatch(changeSelectedYearValue(e) as any);
  };

  useEffect(() => {
    dispatch(getData() as any);
  }, []);

  const { data, searchValue, selectedYear } = transparencyState;
  return (
    <>
      <StyledFullWidthDiv $padding $background>
        <Col>
          <Row>
            <TransparentnostSearch
              buttonEnabled={searchValue !== '' && selectedYear !== ''}
              // searchValue={searchValue}
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

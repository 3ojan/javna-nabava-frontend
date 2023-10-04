import { Col, Image, Row } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable from '../components/table/ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  TransparencyState,
  changeSearchBarValue,
  changeSelectedYearValue,
  getData,
} from 'src/redux/transparency/transparency';
import { useEffect, useState } from 'react';
import {
  StyledCenterDivWrapper,
  StyledFullWidthDiv,
} from '../components/general/styled';
import ExportButtons from '../components/buttons/ExportButtons';
import { StyledExportButtonsDiv } from '../components/buttons/styled';
import BottomImages from '../components/background/BottomImages';
import { mobileWidth } from '../global/constants';

function TransparencyHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowAninm, setIsShowAninm] = useState(false);
  const [isShortened, setIsShortened] = useState(false);

  const transparencyState = useSelector((state: TransparencyState) => {
    return state.transparency;
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    debugger;
    dispatch(changeSearchBarValue(e.target.value));
  };
  const onSearch = (e) => {
    debugger;
    dispatch(getData());
  };
  const onYearChange = (e) => {
    debugger;
    dispatch(changeSelectedYearValue(e));
  };
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const { data, buttonEnabled, searchValue, selectedYear } = transparencyState;
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
              // selectedYear={selectedYear}
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

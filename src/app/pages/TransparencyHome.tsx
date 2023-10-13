import { Col, Image, Row } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable from '../components/table/ResultTable';
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
import BottomImages from '../components/background/BottomImages';
import { mobileWidth } from '../global/constants';
import { AppDispatch } from 'src/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { StyledExportButtonsDiv } from '../components/Buttons/styled';

function TransparencyHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowAninm, setIsShowAninm] = useState(false);
  const [isShortened, setIsShortened] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const transparencyState = useSelector((state: any) => {
    return state.transparency as TransparencyState;
  });

  const onChange = (e) => {
    dispatch(changeSearchBarValue(e.target.value));
  };
  const onSearch = (e) => {
    dispatch(getData());
  };
  const onYearChange = (e) => {
    dispatch(changeSelectedYearValue(e));
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  const { data, searchValue, selectedYear } =
    transparencyState;
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

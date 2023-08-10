import { Col, Image, Row } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable from '../components/table/ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  TransparencyState,
  changeSearchBarValue,
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
import { BackgroundDiv } from '../global/styled';
import { mobileWidth } from '../global/constants';

function TransparencyHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRiseSearchAnim, setIsRiseSearchAnim] = useState(false);
  const [isFallSearchAnim, setIsFallSearchAnim] = useState(false);
  const [isShowAninm, setIsShowAninm] = useState(false);
  const [isShortened, setIsShortened] = useState(false);

  const showResults = () => {
    setIsRiseSearchAnim(true);
    setIsFallSearchAnim(false);
    setIsShowAninm(true);

    setIsVisible(true);

    setTimeout(() => {
      // setIsVisible(true);
      setIsShortened(true);
    }, 2000);
  };

  const hideResults = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    setIsRiseSearchAnim(false);
    setIsFallSearchAnim(true);
    setIsShowAninm(false);
    setIsShortened(false);
    // setIsFadeOutAninm(true);
  };

  const transparencyState = useSelector((state: TransparencyState) => {
    return state.transparency;
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeSearchBarValue(e.target.value));
    if (e.target.value === '') {
      hideResults();
    }
  };
  const onSearch = (e) => {
    dispatch(getData());
    showResults();
  };

  const searchClassName = `${isRiseSearchAnim ? 'riseAnimation' : ''}${
    isFallSearchAnim ? 'fallAnimation' : ''
  }`;

  // const resultsClassName = `${isFadeInAninm ? 'fadeInAnimation' : ''}${
  //   isFadeOutAninm ? 'fadeOutAnimation' : ''
  // }`;

  const { data, buttonEnabled, value } = transparencyState;
  return (
    <>
      <StyledFullWidthDiv $padding $background>
        <Col>
          <Row>
            <TransparentnostSearch
              buttonEnabled={value !== ''}
              searchValue={value}
              onChangeInput={onChange}
              onSearchClick={onSearch}
              className={searchClassName}
            />
          </Row>
          <Row>
            <StyledExportButtonsDiv>
              <ExportButtons />
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

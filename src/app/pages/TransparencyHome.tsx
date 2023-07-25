import { Col, Row } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable from '../components/table/ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  TransparencyState,
  changeSearchBarValue,
  getData,
} from 'src/redux/transparency/transparency';
import { useEffect, useState } from 'react';
import { CenterDivWrapper, FullWidthDiv } from '../components/general/styled';
import ExportButtons from '../components/buttons/ExportButtons';
import { ExportButtonsDiv } from '../components/buttons/styled';
import { MainCol, MainRow, ResultsDiv, SearchRow } from './styled';

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

  useEffect(() => {
    hideResults();
  }, []);

  const { data, buttonEnabled, value } = transparencyState;
  return (
    <>
      <FullWidthDiv $padding>
        {/* <MainRow> */}
        {/* <Col span={2}></Col> */}
        <MainCol>
          <Row>
            {/* <CenterDivWrapper> */}
            <TransparentnostSearch
              buttonEnabled={value !== ''}
              searchValue={value}
              onChangeInput={onChange}
              onSearchClick={onSearch}
              className={searchClassName}
            />
            {/* </CenterDivWrapper> */}
          </Row>
          <ResultsDiv $visible={isVisible} $showAnimation={isShowAninm}>
            <Row>
              <ExportButtonsDiv>
                <ExportButtons />
              </ExportButtonsDiv>
            </Row>
            <Row>
              <ResultTable data={data} />
            </Row>
          </ResultsDiv>
        </MainCol>
        {/* <Col span={2}></Col> */}
        {/* </MainRow> */}
      </FullWidthDiv>
    </>
  );
}

export default TransparencyHome;

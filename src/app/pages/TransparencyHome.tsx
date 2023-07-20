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
import { FullWidthCol, ResultsDiv, SearchRow } from './styled';

function TransparencyHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRiseSearchAnim, setIsRiseSearchAnim] = useState(false);
  const [isFallSearchAnim, setIsFallSearchAnim] = useState(false);
  const [isFadeInAninm, setisFadeInAninm] = useState(false);

  const showResults = () => {
    setIsRiseSearchAnim(true);
    // setIsFallSearchAnim(true);

    // Button begins to shake

    // Buttons stops to shake after 2 seconds
    setTimeout(() => {
      setIsVisible(true);
      // setIsRiseSearchAnim(false);
    }, 2000);
  };

  const hideResults = () => {
    setIsVisible(false);
    setIsRiseSearchAnim(false);
    setIsFallSearchAnim(true);
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

  const { data, buttonEnabled, value } = transparencyState;
  return (
    <>
      <FullWidthDiv $padding>
        {/* <CenterDivWrapper> */}
        <FullWidthCol>
          <SearchRow>
            {/* <CenterDivWrapper> */}
            <TransparentnostSearch
              buttonEnabled={value !== ''}
              searchValue={value}
              onChangeInput={onChange}
              onSearchClick={onSearch}
              className={searchClassName}
            />
            {/* </CenterDivWrapper> */}
          </SearchRow>
          <ResultsDiv $visible={isVisible}>
            <Row>
              <ExportButtonsDiv>
                <ExportButtons />
              </ExportButtonsDiv>
            </Row>
            <Row>
              <ResultTable data={data} />
            </Row>
          </ResultsDiv>
        </FullWidthCol>
        {/* </CenterDivWrapper> */}
      </FullWidthDiv>
    </>
  );
}

export default TransparencyHome;

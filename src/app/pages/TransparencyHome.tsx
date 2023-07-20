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
import { FullWidthCol, ResultsDiv } from './styled';

function TransparencyHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [riseSearchAnim, setRiseSearchAnimation] = useState(false);
  const [fadeInAninm, setfadeInAninm] = useState(false);

  const showResults = () => {
    setIsVisible(true);

    // Button begins to shake
    setRiseSearchAnimation(true);

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setRiseSearchAnimation(false), 2000);
  };

  const hideResults = () => {
    setIsVisible(false);
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

  const { data, buttonEnabled, value } = transparencyState;
  return (
    <>
      <FullWidthDiv $padding>
        <CenterDivWrapper>
          <FullWidthCol>
            <Row>
              {/* <div> */}
              <TransparentnostSearch
                buttonEnabled={value !== ''}
                searchValue={value}
                onChangeInput={onChange}
                onSearchClick={onSearch}
              />
              {/* </div> */}
            </Row>
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
        </CenterDivWrapper>
      </FullWidthDiv>
    </>
  );
}

export default TransparencyHome;

import { Col, Row } from 'antd';
import TransparentnostSearch from '../components/TransparentnostSearch';
import ResultTable from '../components/ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  TransparencyState,
  changeSearchBarValue,
  getData,
} from 'src/redux/transparency/transparency';
import { useEffect } from 'react';
import { debug } from 'console';
import { FullWidthDiv } from '../components/styledComponents/FullWidthDiv';
import ExportButtons from '../components/buttons/ExportButtons';

function TransparencyHome() {
  const transparencyState = useSelector((state: TransparencyState) => {
    return state.transparency;
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeSearchBarValue(e.target.value));
  };
  const onSearch = (e) => {
    dispatch(getData());
  };

  const { data, buttonEnabled, value } = transparencyState;
  return (
    <>
      <FullWidthDiv $padding>
        {/* <HorizontalMarginDiv> */}
        <Col>
          <Row>
            <TransparentnostSearch
              buttonEnabled={value !== ''}
              searchValue={value}
              onChangeInput={onChange}
              onSearchClick={onSearch}
            />
          </Row>
          <Row>
            <ExportButtons />
          </Row>
          <Row>
            <ResultTable data={data} />
          </Row>
        </Col>
        {/* </HorizontalMarginDiv> */}
      </FullWidthDiv>
    </>
  );
}

export default TransparencyHome;

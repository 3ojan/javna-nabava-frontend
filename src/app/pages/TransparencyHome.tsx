import { Col, Row } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable from '../components/table/ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  TransparencyState,
  changeSearchBarValue,
  getData,
} from 'src/redux/transparency/transparency';
import { useEffect } from 'react';
import { debug } from 'console';
import { FullWidthDiv } from '../components/general/styled';
import ExportButtons from '../components/buttons/ExportButtons';
import { ExportButtonsDiv } from '../components/buttons/styled';

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
            <ExportButtonsDiv>
              <ExportButtons />
            </ExportButtonsDiv>
          </Row>
          <Row>
            <ResultTable data={data} />
          </Row>
        </Col>
      </FullWidthDiv>
    </>
  );
}

export default TransparencyHome;

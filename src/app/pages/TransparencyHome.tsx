import { Col, Row } from 'antd';
import TransparentnostSearch from '../components/TransparentnostSearch';
import ResultTable from '../components/ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { TransparencyState, changeSearchBarValue } from 'src/redux/transparency/transparency';

function TransparencyHome() {
  const transparencyState = useSelector((state: TransparencyState) => {
    return state.transparency;
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeSearchBarValue(e.target.value));
  }

  const { data, buttonEnabled, value } = transparencyState;
  return (
    <>
      <Col>
        <Row>
          <TransparentnostSearch buttonEnabled={value !== ""} searchValue={value} onChangeInput={onChange} />
        </Row>
        <Row>
          <ResultTable data={data} />
        </Row>
      </Col>
    </>
  );
}

export default TransparencyHome;

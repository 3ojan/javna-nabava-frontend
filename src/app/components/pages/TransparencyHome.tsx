import { Col, Row } from "antd";
import TransparentnostSearch from "../TransparentnostSearch";
import ResultTable from "../ResultTable";
import { useSelector } from "react-redux";
import { TransparencyState } from "src/redux/transparency/transparency";

function TransparencyHome() {
    const trans = useSelector((state: TransparencyState) => {
    return state.transparency
  });
  const { data } = trans;
  return (
    <>
      <Col>
        <Row>
          <TransparentnostSearch/>
        </Row>
        <Row>
          <ResultTable  data ={data}/>
        </Row>
      </Col>
    </>
  );
}

export default TransparencyHome;
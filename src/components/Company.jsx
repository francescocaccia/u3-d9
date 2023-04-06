import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/`}>company_name</Link>
      </Col>
    </Row>
  );
};

export default Company;

import { Col, Container, Row } from "react-bootstrap";
import Company from "./Company";

const Favourites = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Company />
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

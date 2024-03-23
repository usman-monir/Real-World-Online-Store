import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products.js"

const HomeScreen = () => {
  return (
    <>
      <Row>
        <h1>Latest Products</h1>
        {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

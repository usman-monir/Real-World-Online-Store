import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

import { PRODUCTS_URL} from "../../constants.js"

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        const { data } = await axios.get(`http://localhost:5000/${PRODUCTS_URL}`);
        setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        <h1>Latest Products</h1>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

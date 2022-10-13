import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProduct from '../../../hooks/useProduct';
import Product from '../../Shared/Product/Product';

const TopProducts = () => {

    const [products] = useProduct([]);
    const  newProducts = products.slice(0, 6);


    return (
        <Container className="p-4 top-course mt-4">
            <h1 className="fw-bold pb-2">Top <span>Products</span></h1>
            <Row xs={1} md={3} className="g-4">
                {
                    newProducts.map(product => <Product key={Product.id} product={product}></Product>)
                }
            </Row>
        </Container>
    );
};

export default TopProducts;
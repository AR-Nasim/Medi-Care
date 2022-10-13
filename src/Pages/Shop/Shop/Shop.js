import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProduct from '../../../hooks/useProduct';
import Product from '../../Shared/Product/Product';
import ShopBanner from '../ShopBanner/ShopBanner';

const Shop = () => {
    const [products] = useProduct();
    return (
        <>
            <ShopBanner></ShopBanner>
            <Container className="p-4 top-course mt-4">
                <h1 className="fw-bold pb-2">All <span>Products</span></h1>
                <Row xs={1} md={3} className="g-4 p-4">

                    {
                        products.map(product => <Product product={product} key={product.id}></Product>)
                    }

                </Row>
            </Container>
        </>
    );
};

export default Shop;
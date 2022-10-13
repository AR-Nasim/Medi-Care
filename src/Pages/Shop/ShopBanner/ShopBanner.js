import React from 'react';
import { Col, Row } from 'react-bootstrap';
import shopBanner from '../../../images/shop-banner.jpg';
import './ShopBanner.css';

const ShopBanner = () => {
    return (
        <div className="course-heading" style={{ backgroundImage: `url(${shopBanner})` }}>
            <div className="img-opacity"></div>
            <Row className="justify-content-md-center description">
                <Col md={7}>
                    <h1><span>Medi-Care</span> Products</h1>
                    <h2><span>Develop your career with our courses</span></h2>
                    <p>Learn modern tech skills the way you learn best. Our hundreds of courses offer technical deep dives into the latest tech.Learn modern tech skills the way you learn best. Our hundreds of courses offer technical deep dives into the latest tech.</p>
                </Col>
            </Row>
        </div>
    );
};

export default ShopBanner;
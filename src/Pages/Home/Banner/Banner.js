import React from 'react';
import './Banner.css';
import { Carousel, Col, Row } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.jpg';
import banner2 from '../../../images/banner-2.jpg';
import banner3 from '../../../images/banner-3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel fade className="banner-div">
                <Carousel.Item>
                    <img className="banner" src={banner1} alt="First slide" />
                    <div className="img-opacity"></div>
                    <Row className="justify-content-md-center description">
                    <Col md={7}>
                        <h1><span>Medi-Care</span></h1>
                        <h2><span>Tackle the challenge of delivering health care</span></h2>
                        <p>Since its founding Delmont has been providing its patients with the full medical care, encompassing outpatients services, is neurology, laboratory, imaging diagnostics and more. Since 1968 we are providing good services.</p>
                    </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="banner" src={banner2} alt="First slide" />
                    <div className="img-opacity"></div>
                    <Row className="justify-content-md-center description">
                    <Col md={7}>
                        <h1><span>Medi-Care</span></h1>
                        <h2><span>We have dedicated Doctors teams</span></h2>
                        <p>Since its founding Delmont has been providing its patients with the full medical care, encompassing outpatients services, is neurology, laboratory, imaging diagnostics and more. Since 1968 we are providing good services.</p>
                    </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="banner" src={banner3} alt="First slide" />
                    <div className="img-opacity"></div>
                    <Row className="justify-content-md-center description">
                    <Col md={7}>
                        <h1><span>Medi-Care</span></h1>
                        <h2><span>The best quality and prices</span></h2>
                        <p>Since its founding Delmont has been providing its patients with the full medical care, encompassing outpatients services, is neurology, laboratory, imaging diagnostics and more. Since 1968 we are providing good services.</p>
                    </Col>
                </Row>
                </Carousel.Item>
                
            </Carousel>


        </>
    );
};

export default Banner;
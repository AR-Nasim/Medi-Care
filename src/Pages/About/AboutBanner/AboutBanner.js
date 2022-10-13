import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutBanner from '../../../images/about-banner.jpg';

const AboutBanner = () => {
    return (
        <div>
            <div className="course-heading" style={{ backgroundImage: `url(${aboutBanner})` }}>
            <div className="img-opacity"></div>
                <Row className="justify-content-md-center description">
                    <Col md={7}>
                        <h1>About <span>Medi-Care</span></h1>
                        <h2><span>Our Dedicated Doctors Team</span></h2>
                        <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutBanner;
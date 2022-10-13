import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import featureImg from '../../../images/features.png';

const Features = () => {
    return (
        <Container>
            <Row className="text-start d-flex align-items-center">
                <Col md={7}>
                    <div className="info">
                        <h1 className="fw-bold">We Have 25 Years <br /><span>Experience</span></h1>
                        <h5>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our stpatients for recovery.</h5>
                        <small>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</small>
                    </div>
                </Col>
                <Col md={5} className="text-center info-img pe-5">
                    <img style={{ width: "100%" }} src={featureImg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Features;
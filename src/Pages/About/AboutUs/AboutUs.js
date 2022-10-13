import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../../images/aboutUs.png';

const AboutUs = () => {
    return (
        <div>
            <Row className="text-start d-flex align-items-center">
                    <Col md={5} className="text-center info-img">
                        <img style={{ width: "100%" }} src={img} alt="" />
                    </Col>
                    <Col md={7}>
                        <div className="info">
                            <h1 className="fw-bold"><span>About </span>Us</h1>
                            <p>We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
                            <p>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                        </div>
                    </Col>
                </Row>
        </div>
    );
};

export default AboutUs;
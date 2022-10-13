import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing font awesome
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) => {
    const {img,name,rating,price} = props.product;
    return (
        <Col>
            <Card className="card">
                <Card.Img className="px-3" variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <h5>Price: ${price}</h5>
                    </Card.Text>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                    />
                    <span className="text-dark">({rating})</span>
                    <br />
                    <Link to={`/detailProduct/${props.product.id}`}><Button className="btn-custom mt-3" variant="primary"><FontAwesomeIcon icon={faBook} /> Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
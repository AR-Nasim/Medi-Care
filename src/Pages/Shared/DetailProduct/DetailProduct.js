import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const DetailProduct = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
    useEffect(() => {
        if (!products.length) {
            fetch('https://raw.githubusercontent.com/AR-Nasim/data/main/products.json')
                .then(res => res.json())
                .then(data => setProducts(data));
        }
        if (products.length) {
            const product = products.find(pd => pd.id === parseInt(productId));
            setNewProduct(product);
        }

    }, [products]);

    const { name, details, features, price} = newProduct;

    return (
        <div className="pt-5 mt-5">
            <Card className="text-center">
                <Card.Header><h2>{name}</h2></Card.Header>
                <Card.Body>
                    <Card.Title>{details}</Card.Title>
                    <Card.Text>
                        <p>{features?features[0]:"Error"}</p>
                        <p>{features?features[1]:"Error"}</p>
                        <p>{features?features[2]:"Error"}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-danger"><h4>Price: ${price}</h4></Card.Footer>
            </Card>
        </div>
    );
};

export default DetailProduct;
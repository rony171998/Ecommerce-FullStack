import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const SimilarProducts = ({products}) => {
    const navigate = useNavigate();
    
    
    
    return (
        <Card>
            <Row>
                {products.lenght ? (
                    <Card>Not Fount Product</Card>
                ) : (
                    products?.map(product => (
                        <Col key={product.id}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>{product.title}</Card.Title>
                                </Card.Header>

                                <Card.Body
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        navigate(`/products/${product.id}`)
                                    }
                                >
                                    {product?.productImgs[0] === undefined ? (
                                        <Card.Img
                                            src="./no photo.jfif"
                                            style={{
                                                width: "260px",
                                                height: "250px",
                                                objectFit: "contain",
                                            }}
                                        />
                                    ) : (
                                        <Card.Img
                                        src={product.productImgs?.[0].imgUrl}
                                        style={{
                                            width: "260px",
                                            height: "250px",
                                            objectFit: "contain",
                                        }}
                                    />
                                    )
                                    }
                                </Card.Body>
                                <Card.Footer>
                                    Price ${product.price} USD
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Card>
    );
};

export default SimilarProducts;

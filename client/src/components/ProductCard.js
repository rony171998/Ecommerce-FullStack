import React from "react";
import { Button, Card, Col, InputGroup, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({addToCard , products}) => {
    const Navigate = useNavigate();

    return (
        <ListGroup>
            <Row md={3}>
                { products.lenght === 0 ? (
                    <Card>List Null</Card>
                ) : (
                    products?.map(product => (
                        <Col key={product.id}>
                            <Card>
                                
                                <Card.Body
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        Navigate(`/products/${product.id}`)
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
                                    <Card.Subtitle className="p-1">
                                        {product.title}
                                    </Card.Subtitle>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            $ {product.price} USD
                                        </InputGroup.Text>

                                        <Button
                                            onClick={() =>
                                                addToCard(product.id)
                                            }
                                            
                                        >
                                            Add Cart
                                        </Button>
                                    </InputGroup>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </ListGroup>
    );
};

export default ProductCard;

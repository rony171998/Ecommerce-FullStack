import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Emptyproduct from "./Emptyproduct";

const ProductCard = ({ products }) => {
    const Navigate = useNavigate();
    const page = useParams().page;
    const numberinpage = 12;

    return (
        <ListGroup>
            <Row  xs={1} md={2} lg={3} className="g-3">
                {products.lenght === 0 ? (
                    <Emptyproduct />
                ) : (
                    products?.map(
                        (product, index) =>
                            index <
                                numberinpage *
                                    (page === undefined ? 1 : page) &&
                            index >=
                                numberinpage * (page === undefined ? 1 : page) -
                                    numberinpage && (
                                <Col key={product.id}>
                                    <Card
                                        className="text-center"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            Navigate(`/products/${product.id}`)
                                        }
                                    >
                                        <Card.Header>
                                            <Card.Title>
                                                {product.title}
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className="py-1 px-0">
                                            <Card.Img
                                                alt={"Image " + product.title}
                                                src={
                                                    product.productImgs?.[0]
                                                        ?.imgUrl ??
                                                    "./no photo.jfif"
                                                }
                                                style={{
                                                    height: "15rem",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Card.Body>
                                        <Card.Footer>
                                            $ {product.price} USD
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                    )
                )}
            </Row>
        </ListGroup>
    );
};

export default ProductCard;

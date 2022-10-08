import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Emptyproduct from "./Emptyproduct";

const ProductInHome = () => {
    let categories = useSelector(state => state.category);
    let products = useSelector(state => state.products);

    const navigate = useNavigate();

    return (
        <div>
            {products.length === 0 || categories.length === 0 ? (
                <Emptyproduct />
            ) : (
                <Row md="2">
                    {categories.categories?.map(category => (
                        <Col key={category.id}>
                            <Card className="my-3" style={{ cursor:"pointer"}}>
                                <Card.Header>
                                    <h4>{category.name}</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Carousel>
                                        {products
                                            .filter(
                                                product =>
                                                    product.categoryId ===
                                                    category.id
                                            )
                                            .map(product => (
                                                <Carousel.Item
                                                    key={product.id}
                                                    onClick={() =>
                                                        navigate(
                                                            `/category/${category.id}`
                                                        )
                                                    }
                                                >
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.productImgs[1]
                                                            ?.imgUrl ?? "./no photo.jfif"}
                                                        alt={product.title}
                                                    />
                                                    <Carousel.Caption>
                                                        <h3>{product.title}</h3>
                                                        <p>
                                                            {
                                                                product.description
                                                            }
                                                        </p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            ))}
                                    </Carousel>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            )}
        </div>
    );
};

export default ProductInHome;

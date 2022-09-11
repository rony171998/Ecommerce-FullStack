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
                    <Col>
                        <Card
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/category/${categories.categories[1].id}`)}
                        >
                            <Card.Header>
                                {categories.categories?.[1].name}
                            </Card.Header>
                            <Carousel controls="false">
                                {products?.map(
                                    (product, index) =>
                                        product.categoryId ===
                                            categories.categories[1].id && (
                                            <Carousel.Item key={index}>
                                                <Card>
                                                    <Card.Header>
                                                        <Card.Title>
                                                            {product.title}
                                                        </Card.Title>
                                                    </Card.Header>
                                                    <Card.Img
                                                        variant="top"
                                                        src={
                                                            product
                                                                .productImgs[1]
                                                                ?.imgUrl ??
                                                            "./no photo.jfif"
                                                        }
                                                    />
                                                    
                                                    <Card.Body>
                                                        <Card.Title>
                                                            {product.name}
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {
                                                                product.description
                                                            }
                                                        </Card.Text>
                                                        
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Card.Text>
                                                            $ {product.price}{" "}
                                                            USD
                                                        </Card.Text>
                                                    </Card.Footer>
                                                </Card>
                                            </Carousel.Item>
                                        )
                                )}
                            </Carousel>
                        </Card>
                    </Col>
                    <Col>
                    <Card
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/category/${categories.categories[0].id}`)}
                        >
                            <Card.Header>
                                {categories.categories?.[0].name}
                            </Card.Header>
                            <Carousel>
                                {products?.map(
                                    (product, index) =>
                                        product.categoryId ===
                                            categories.categories[0].id && (
                                            <Carousel.Item key={index}>
                                                <Card>
                                                    <Card.Header>
                                                        <Card.Title>
                                                            {product.title}
                                                        </Card.Title>
                                                    </Card.Header>
                                                    <Card.Img
                                                        variant="top"
                                                        src={
                                                            product
                                                                .productImgs[1]
                                                                ?.imgUrl ??
                                                            "./no photo.jfif"
                                                        }
                                                    />
                                                    <Card.Body>
                                                        <Card.Title>
                                                            {product.name}
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {
                                                                product.description
                                                            }
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Card.Text>
                                                            $ {product.price}{" "}
                                                            USD
                                                        </Card.Text>
                                                    </Card.Footer>
                                                </Card>
                                            </Carousel.Item>
                                        )
                                )}
                            </Carousel>
                        </Card>
                    </Col>
                    <Col>
                    <Card
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/category/${categories.categories[2].id}`)}
                        >
                            <Card.Header>
                                {categories.categories?.[2].name}
                            </Card.Header>
                            <Carousel>
                                {products?.map(
                                    (product, index) =>
                                        product.categoryId ===
                                            categories.categories[2].id && (
                                            <Carousel.Item key={index}>
                                                <Card>
                                                    <Card.Header>
                                                        <Card.Title>
                                                            {product.title}
                                                        </Card.Title>
                                                    </Card.Header>
                                                    <Card.Img
                                                        variant="top"
                                                        src={
                                                            product
                                                                .productImgs[1]
                                                                ?.imgUrl ??
                                                            "./no photo.jfif"
                                                        }
                                                    />
                                                    <Card.Body>
                                                        <Card.Title>
                                                            {product.name}
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {
                                                                product.description
                                                            }
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Card.Text>
                                                            $ {product.price}{" "}
                                                            USD
                                                        </Card.Text>
                                                    </Card.Footer>
                                                </Card>
                                            </Carousel.Item>
                                        )
                                )}
                            </Carousel>
                        </Card>
                    </Col>
                    <Col>
                    <Card
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/category/${categories.categories[3].id}`)}
                        >
                            <Card.Header>
                                {categories.categories?.[3].name}
                            </Card.Header>
                            <Carousel>
                                {products?.map(
                                    (product, index) =>
                                        product.categoryId ===
                                            categories.categories[3].id && (
                                            <Carousel.Item key={index}>
                                                <Card>
                                                    <Card.Header>
                                                        <Card.Title>
                                                            {product.title}
                                                        </Card.Title>
                                                    </Card.Header>
                                                    <Card.Img
                                                        variant="top"
                                                        src={
                                                            product
                                                                .productImgs[1]
                                                                ?.imgUrl ??
                                                            "./no photo.jfif"
                                                        }
                                                    />
                                                    <Card.Body>
                                                        <Card.Title>
                                                            {product.name}
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {
                                                                product.description
                                                            }
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Card.Text>
                                                            $ {product.price}{" "}
                                                            USD
                                                        </Card.Text>
                                                    </Card.Footer>
                                                </Card>
                                            </Carousel.Item>
                                        )
                                )}
                            </Carousel>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default ProductInHome;

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
                <Row  xs={1} md={2} lg={2} className="g-3">
                    {categories.categories?.map((category , index) => 
                        index < 6 && (
                    
                        <Col key={category.id} >
                            <Card className="text-center" style={{ cursor:"pointer"}}>
                                <Card.Header>
                                    <Card.Title>{category.name}</Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
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

                                                    <Card.Img
                                                        variant="top"
                                                        src={product.productImgs[0]
                                                            ?.imgUrl ?? "./no photo.jfif"}
                                                        alt={product.title}
                                                        style={{                                                                                               
                                                            height: "20em",
                                                            objectFit: "contain",                                           
                                                        }}
                                                    />
                                                    
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

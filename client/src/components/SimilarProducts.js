import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../store/slices/products.slice";

const SimilarProducts = ({ products }) => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts());
        }

        if (products.length > 0) {
            const productParam = products.find(
                productsItem => productsItem.id === Number(productId)
            );
            setProduct(
                products.filter(
                    productsItem =>
                        productsItem.categoryId === productParam.categoryId
                )
            );
        }
    }, [dispatch, productId, products]);

    return (
        <Row md={4}>
            {product.length &&
                product?.map(
                    (product, index) =>
                        product.id != productId &&
                        index < 4 &&
                        index >= 0 && (
                            <Col key={product.id}>
                                <Card
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        navigate(`/products/${product.id}`)
                                    }
                                >
                                    <Card.Header>
                                        <Card.Title>{product.title}</Card.Title>
                                    </Card.Header>

                                    <Card.Body>
                                        <Card.Img
                                            alt={"Image" + product.title}
                                            src={
                                                product.productImgs?.[0]
                                                    ?.imgUrl ??
                                                "./no photo.jfif"
                                            }
                                            style={{
                                                height: "20vh",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </Card.Body>
                                    <Card.Footer>
                                        Price ${product.price} USD
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                )}
        </Row>
    );
};

export default SimilarProducts;

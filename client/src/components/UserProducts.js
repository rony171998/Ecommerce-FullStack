import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../store/slices/products.slice";
import Emptyproduct from "./Emptyproduct";
import LoadingScreen from "./LoadingScreen";

const UserProducts = ({ userproducts }) => {
    const [hideDelete, setHideDelete] = useState(true);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);

    const getDeleteProduct = id => {
        dispatch(deleteProduct(id));
    };

    useEffect(() => {
        if (userproducts !== undefined) {
            if (hideDelete) {
                setProducts(
                    userproducts.filter(product => {
                        return product.status === "active";
                    })
                );
            } else {
                setProducts(
                    userproducts.filter(product => {
                        return product.status !== "active";
                    })
                );
            }
        }
    }, [hideDelete, userproducts]);

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    <h2>My Products</h2>
                </Card.Title>
                <Form>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="show Deleted"
                        onChange={() => setHideDelete(!hideDelete)}
                    />
                </Form>
            </Card.Header>
            <Card.Body>
                {isLoading ? (
                    <LoadingScreen />
                ) : products.length === 0 ? (
                    <Emptyproduct />
                ) : (
                    <Row xs={1} md={2} lg={3} className="g-3">
                        {products?.map(product => (
                            <Col key={product.id}>
                                <Card className="text-center">
                                    <Card.Header>
                                        <Card.Title>
                                            {product.title}

                                            {product.status === "active" && (
                                                <Card.Img
                                                    src="https://img.icons8.com/color/48/000000/delete-forever.png"
                                                    style={{
                                                        cursor: "pointer",
                                                        float: "right",
                                                        width: "2rem",
                                                    }}
                                                    onClick={() =>
                                                        getDeleteProduct(
                                                            product.id
                                                        )
                                                    }
                                                />
                                            )}
                                            {product.status === "active" && (
                                                <Card.Img
                                                    src="https://img.icons8.com/color/48/000000/edit--v1.png"
                                                    style={{
                                                        cursor: "pointer",
                                                        float: "right",
                                                        width: "2rem",
                                                    }}
                                                    onClick={() =>
                                                        navigate(
                                                            `/UpdateProduct/${product.id}`
                                                        )
                                                    }
                                                />
                                            )}
                                        </Card.Title>
                                    </Card.Header>

                                    <Card.Body
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            product.status === "active" &&
                                            navigate(`/products/${product.id}`)
                                        }
                                    >
                                        <Card.Img
                                            alt={"Image" + product.title}
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
                                        <Card.Text>
                                            Price ${product.price} USD{" "}
                                            {product.status}
                                        </Card.Text>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Card.Body>
        </Card>
    );
};

export default UserProducts;

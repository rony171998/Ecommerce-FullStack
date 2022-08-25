import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../store/slices/products.slice";
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
                {userproducts === undefined ? (
                    <Card.Text>Not products</Card.Text>
                ) : (
                    <Row>
                        {products?.map(product => (
                            <Col key={product.id}>
                                {isLoading ? (
                                    <LoadingScreen />
                                ) : (
                                    <Card>
                                        <Card.Header>
                                            <Card.Title>
                                                {product.title}

                                                {product.status ===
                                                    "active" && (
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
                                            </Card.Title>
                                        </Card.Header>

                                        <Card.Body
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                product.status === "active" &&
                                                navigate(
                                                    `/products/${product.id}`
                                                )
                                            }
                                        >
                                            {product.productImgs.length ===
                                            0 ? (
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
                                                    src={
                                                        product.productImgs?.[0]
                                                            ?.imgUrl
                                                    }
                                                    style={{
                                                        width: "260px",
                                                        height: "250px",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            )}
                                        </Card.Body>
                                        <Card.Footer>
                                            <Card.Text>
                                                Price ${product.price} USD{" "}
                                                {product.status}
                                            </Card.Text>
                                        </Card.Footer>
                                    </Card>
                                )}
                            </Col>
                        ))}
                    </Row>
                )}
            </Card.Body>
        </Card>
    );
};

export default UserProducts;

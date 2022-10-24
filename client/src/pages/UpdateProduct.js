import React, { useEffect } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoadingScreen, LoadingSwal, ProductDetail } from "../components";
import { getProducts, pachProduct } from "../store/slices/products.slice";

export const UpdateProduct = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    let products = useSelector(state => state.products);
    const { productId } = useParams();

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts());
        }
        // filter product by id params (productId)
        if (products.length > 0) {
            reset(
                products.find(
                    productsItem => productsItem.id === Number(productId)
                )
            );
        }
    }, [dispatch, productId, products, reset]);

    const submit = (data, e) => {
        e.preventDefault();
        LoadingSwal(isLoading);
        dispatch(pachProduct(productId,data));
        
    };

    return (
        <div>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <Row>
                    <Col>
                        <Card className="mx-auto mt-5 text-center">
                            <Card.Header className="">
                                <Card.Title>Update Product</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit(submit)}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasictitle"
                                    >
                                        <Form.Control
                                            {...register("title")}
                                            type="text"
                                            placeholder="Title"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicdescription"
                                    >
                                        <Form.Control
                                            {...register("description")}
                                            as="textarea"
                                            rows={4}
                                            placeholder="Description"
                                            required
                                            maxLength="250"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicprice"
                                    >
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>
                                                USD $
                                            </InputGroup.Text>

                                            <Form.Control
                                                {...register("price")}
                                                type="number"
                                                placeholder="Price"
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicquantity"
                                    >
                                        <Form.Control
                                            {...register("quantity")}
                                            type="number"
                                            placeholder="quantity"
                                            required
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="text-center"
                                    >
                                        update
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="9">
                        <ProductDetail />
                    </Col>
                </Row>
            )}
        </div>
    );
};

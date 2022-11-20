import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductsToCart } from "../store/slices/cart.slice";
import {
    Button,
    Card,
    Carousel,
    Col,
    Form,
    InputGroup,
    Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getProducts } from "../store/slices/products.slice";

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [quantitiesproduct, setQuantitiesProducts] = useState(1);

    const { handleSubmit } = useForm();
    const form = useRef();

    const { productId } = useParams();
    let products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts());
        }
        // filter product by id params (productId)
        if (products.length > 0) {
            setProduct(
                products.find(
                    productsItem => productsItem.id === Number(productId)
                )
            );
        }
    }, [dispatch, productId, products]);

    const subtractQuantitiesProduc = () => {
        if (quantitiesproduct > 1) {
            setQuantitiesProducts(quantitiesproduct - 1);
        }
    };
    const addQuantitiesProduc = () => {
        if (quantitiesproduct < product.quantity) {
            setQuantitiesProducts(quantitiesproduct + 1);
        }
    };

    const submit = () => {
        dispatch(addProductsToCart(productId, quantitiesproduct));
    };

    return (
        <Row>
            <Col lg="8">
                <Card>
                    <Card.Body>
                        {product.productImgs?.length === 0 ? (
                            <Card.Img
                                style={{
                                    height: "55vh",
                                    objectFit: "contain",
                                }}
                                src={"./no photo.jfif"}
                                alt="no photo"
                            />
                        ) : (
                            <Carousel variant="dark">
                                {product?.productImgs?.map(
                                    (productImg, index) => (
                                        <Carousel.Item key={index}>
                                            <Card.Img
                                                style={{
                                                    height: "55vh",
                                                    objectFit: "contain",
                                                }}
                                                src={
                                                    productImg?.imgUrl ??
                                                    "/.no photo.jfif"
                                                }
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    )
                                )}
                            </Carousel>
                        )}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ height: "55vh" }}>
                    <Card.Header>
                        <Card.Title>{product.title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>
                            Category: {product.categoryId}
                        </Card.Subtitle>

                        <Card.Text>
                            Description: {product.description}
                        </Card.Text>

                        <Card.Text>
                            Fecha Publicacion: {product.createdAt?.substr(0, 10) ?? product.createdAt}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Form onSubmit={handleSubmit(submit)} ref={form}>
                            <Form.Group controlId="formBasicQuantity">
                                <InputGroup>
                                    <Button onClick={subtractQuantitiesProduc}>
                                        -
                                    </Button>

                                    <InputGroup.Text>
                                        Quantity: {quantitiesproduct}
                                    </InputGroup.Text>

                                    <Button onClick={addQuantitiesProduc}>
                                        +
                                    </Button>

                                    <InputGroup.Text>
                                        Stock : {product.quantity}
                                    </InputGroup.Text>
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroup.Text>
                                        $ {product.price} USD
                                    </InputGroup.Text>

                                    <Button onClick={submit}>Add Cart</Button>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
};

export default ProductDetail;

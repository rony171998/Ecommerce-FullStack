import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductsToCart } from "../store/slices/products.slice";
import {
    Button,
    Card,
    Col,
    Form,
    InputGroup,
    Row,
    ToggleButton,
    ToggleButtonGroup,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const [quantitiesproduct, setQuantitiesProducts] = useState(1);

    const { handleSubmit } = useForm();

    const { id } = useParams();
    let products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    useEffect(() => {
        setProduct(
            products.find(productsItem => productsItem.id === Number(id))
        );
    }, [products, id]);

    const subtractQuantitiesProduc = () => {
        if (quantitiesproduct > 1) {
            setQuantitiesProducts(quantitiesproduct - 1);
        }
    };
    const addQuantitiesProduc = () => {
        setQuantitiesProducts(quantitiesproduct + 1);
    };

    const submit = () => {
        dispatch(addProductsToCart(id, quantitiesproduct));
    };
    return (
        <Row>
            <Col>
                <Card className="p-1">
                    {product?.productImgs?.[0] === undefined ? (
                        <Card.Img
                            src="./no photo.jfif"
                            style={{
                                width: "260px",
                                height: "250px",
                                objectFit: "contain",
                            }}
                        />
                    ) : (
                        <>
                            <Card.Img
                                src={product.productImgs?.[value].imgUrl}
                                style={{
                                    maxwidth: "560px",
                                    maxHeight: "550px",
                                    objectFit: "contain",
                                }}
                            ></Card.Img>
                            <ToggleButtonGroup
                                className="mt-1"
                                type="checkbox"
                                value={value}
                            >
                                <ToggleButton
                                    id="toggle-check"
                                    onClick={() => setValue(0)}
                                    type="checkbox"
                                    value={1}
                                >
                                    Photo 1
                                </ToggleButton>
                                <ToggleButton
                                    id="toggle-check"
                                    onClick={() => setValue(1)}
                                    type="checkbox"
                                    value={2}
                                >
                                    Photo 2
                                </ToggleButton>
                                <ToggleButton
                                    id="toggle-check"
                                    onClick={() => setValue(2)}
                                    type="checkbox"
                                    value={3}
                                >
                                    Photo 3
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </>
                    )}
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title>{product.title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>
                            Category: {product.category?.name}
                        </Card.Subtitle>

                        <Card.Text>
                            Description: {product.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Form onSubmit={handleSubmit(submit)}>
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
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroup.Text>
                                        $ {product.price} USD
                                    </InputGroup.Text>

                                    <Button type="submit">Add Cart</Button>
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

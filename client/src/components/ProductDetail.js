import React, { useEffect, useState } from "react";
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

    const { productId } = useParams();
    let products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts());
        }           
        
        if (products.length > 0) {
            setProduct(
                products.find(productsItem => productsItem.id === Number(productId))
            );
        }

    }, [productId , dispatch]);

    const subtractQuantitiesProduc = () => {
        if (quantitiesproduct > 1) {
            setQuantitiesProducts(quantitiesproduct - 1);
        }
    };
    const addQuantitiesProduc = () => {
        setQuantitiesProducts(quantitiesproduct + 1);
    };

    const submit = () => {
        dispatch(addProductsToCart(productId, quantitiesproduct));
    };

    return (
        <Row>
            <Col sm="8">
                <Card>
                    <Card.Body>
                        {product.productImgs?.length === 0 ? (
                            <Card.Img
                                src="./no photo.jfif"                               
                            />
                        ) : (
                            <Carousel variant="dark">
                                {product.productImgs?.map(
                                    (productImg, index) => (
                                        <Carousel.Item key={index}>
                                            <Card.Img
                                                className="d-block w-500 h-500"
                                                src={productImg.imgUrl}
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
                <Card>
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

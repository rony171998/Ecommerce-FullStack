import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postCart } from "../store/slices/purchases.slice";

const PurchaseData = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = data => {
        dispatch(postCart(data));
    };

    return (
        <div>
            <Card className="mt-3">
                <Card.Body className="mt-3">
                    <h1>Shipping Address</h1>
                    <Form onSubmit={handleSubmit(submit)}>
                        
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicStreet"
                        >
                            <Form.Label>Street</Form.Label>
                            <br />

                            <Form.Control
                                {...register("street")}
                                type="text"
                                placeholder="Enter direcction"
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicColony"
                        >
                            <Form.Label>Colony</Form.Label>
                            <br />

                            <Form.Control
                                {...register("colony")}
                                type="text"
                                placeholder="Enter colony o barrio"
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicZidcode"
                        >
                            <Form.Label>Zidcode</Form.Label>
                            <br />

                            <Form.Control
                                {...register("zidcode")}
                                type="number"
                                placeholder="Enter zidcode (codigo postal)"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <br />

                            <Form.Control
                                {...register("city")}
                                type="text"
                                placeholder="Enter city"
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicReferences"
                        >
                            <Form.Label>References</Form.Label>
                            <br />

                            <Form.Control
                                {...register("references")}
                                type="text"
                                placeholder="Enter references"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Buy
                        </Button>
                        <br />

                        <a href="#/purchases"> Ir a compras</a>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PurchaseData;

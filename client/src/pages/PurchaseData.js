import React from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { postCart } from '../store/slices/products.slice';

const PurchaseData = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data);

        dispatch(postCart(data));
    }

    return (
        <div>

            <ListGroup className='mt-3'>

                <ListGroup.Item className='mt-3'>

                    <Form onSubmit={handleSubmit(submit)}>

                        <h1>Form Personal Data</h1>

                        <Form.Group className="mb-3" controlId="formBasicStreet">

                            <Form.Label>Street</Form.Label><br />

                            <Form.Control
                                {...register("street")}
                                type="text"
                                placeholder="Enter direcction"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicColony">

                            <Form.Label>Colony</Form.Label><br />

                            <Form.Control
                                {...register("colony")}
                                type="text"
                                placeholder="Enter colony"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicZidcode">

                            <Form.Label>Zidcode</Form.Label><br />

                            <Form.Control
                                {...register("zidcode")}
                                type="text"
                                placeholder="Enter zidcode"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCity">

                            <Form.Label>City</Form.Label><br />

                            <Form.Control
                                {...register("city")}
                                type="text"
                                placeholder="Enter city"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicReferences">

                            <Form.Label>References</Form.Label><br />

                            <Form.Control
                                {...register("references")}
                                type="text"
                                placeholder="Enter references"
                            />

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Buy
                        </Button><br />

                        <a href="#/purchases"> Ir a compras</a>


                    </Form>

                </ListGroup.Item>
                
            </ListGroup>
            

        </div>
    );
};

export default PurchaseData;
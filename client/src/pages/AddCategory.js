import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ListCategories, Weather } from "../components";
import { postCategory } from "../store/slices/category.slice";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = data => {
        dispatch(postCategory(data));
    };
    return (
        <div>
            <Row>
                <Col sm="3" className="mt-3">
                    <ListCategories />

                    <Weather />
                </Col>
                <Col sm="8">
                    <Card className="mx-auto mt-3">
                        <Card.Header>
                            <Card.Title>Add Category</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit(submit)}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicname"
                                >
                                    <Form.Label>Name Category</Form.Label>
                                    <Form.Control
                                        {...register("name")}
                                        type="text"
                                        placeholder="Title"
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Add
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AddProduct;

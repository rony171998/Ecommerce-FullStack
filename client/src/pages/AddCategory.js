import React from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { postCategory } from '../store/slices/products.slice';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        
        dispatch(postCategory(data));
    };
    return (
        <div>
            <Card style={{ maxWidth: "500px" }} className="mx-auto mt-5">
                <Card.Header>
                    <Card.Title>Add Category</Card.Title>
                </Card.Header>
            <Card.Body>
              
              <Form onSubmit={handleSubmit(submit)}>
              <Form.Group className="mb-3" controlId="formBasicname">
                  <Form.Label>Name Category</Form.Label>
                  <Form.Control
                    {...register("name")}
                    type="text"
                    placeholder="Title"
                  />
                </Form.Group>
                
                
                <Button variant="primary" type="submit">Add</Button>
                
              </Form>
            </Card.Body>
          </Card>
        </div>
    );
};

export default AddProduct;
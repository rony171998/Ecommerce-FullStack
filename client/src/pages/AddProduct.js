import React from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { postProduct } from '../store/slices/products.slice';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data);
        dispatch(postProduct(data));
    };
    return (
        <div>
            <Card style={{ maxWidth: "500px" }} className="mx-auto mt-5">
                <Card.Header>
                    <Card.Title>Add Product</Card.Title>
                </Card.Header>
            <Card.Body>
              
              <Form onSubmit={handleSubmit(submit)}>
              <Form.Group className="mb-3" controlId="formBasictitle">
                  <Form.Label>Name Product</Form.Label>
                  <Form.Control
                    {...register("title")}
                    type="text"
                    placeholder="Title"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicdescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    {...register("description")}
                    type="text"
                    placeholder="Enter Description"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicprice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    {...register("price")}
                    type="number"
                    placeholder="Price"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicquantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    {...register("quantity")}
                    type="number"
                    placeholder="quantity"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccategoryId">
                  <Form.Label>Category</Form.Label>
                  <Form.Control 
                  {...register("categoryId")}
                  type="number"
                  placeholder="number category" />
                </Form.Group>   
         
                <Form.Group className="mb-3" controlId="formBasicproductImg">
                  <Form.Label>Image 1</Form.Label>
                  <Form.Control
                    {...register("productImg")}
                    type="file"
                    placeholder="Image 1"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicproductImg">
                  <Form.Label>Image 2</Form.Label>
                  <Form.Control
                    {...register("productImg1")}
                    type="file"
                    placeholder="Image 2"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicproductImg">
                  <Form.Label>Image 3</Form.Label>
                  <Form.Control
                    {...register("productImg2")}
                    type="file"
                    placeholder="Image 3"
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
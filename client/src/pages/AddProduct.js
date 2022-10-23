import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSwal } from "../components";
import { postProduct } from "../store/slices/products.slice";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        axios.get("/products/categories").then(res => setCategories(res.data));
    }, [dispatch]);

    const submit = (data , e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("categoryId", data.categoryId);

        for (let value of data.productImg) {
            formData.append("productImg", value);
        }
        LoadingSwal(isLoading);
        dispatch(postProduct(formData));
        
    };
    return (
        <div>
            <Card style={{ maxWidth: "500px" }} className="mx-auto mt-5 text-center">
                <Card.Header className="">
                    <Card.Title>Add Product</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Form.Group className="mb-3" controlId="formBasictitle">
                            
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
                       
                        <Form.Group className="mb-3" controlId="formBasicprice"> 
                          
                        <InputGroup className="mb-3">
                            
                            <InputGroup.Text>USD $</InputGroup.Text>
                            
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

                        <Form.Group
                            className="mb-3"
                            controlId="formBasiccategoryId"
                        >
                            
                            <Form.Select {...register("categoryId")} required>
                                <option value="">Select Category</option>
                                {categories.categories?.map(category => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicproductImg"
                        >
                            <Form.Label>Images</Form.Label>
                            <Form.Control
                                {...register("productImg")}
                                type="file"
                                accept="image/*"
                                placeholder="Images"
                                multiple
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="text-center">
                            Add
                        </Button>
                        
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddProduct;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postProduct } from "../store/slices/products.slice";
import { AlertSuccess , AlertError } from "../components/Alerts";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get("/products/categories").then(res => setCategories(res.data));
    }, [dispatch]);

    const submit = data => {
        let formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("categoryId", data.categoryId);

        for (let value of data.productImg) {
            formData.append("productImg", value);
        }
        console.log(data);
        setShow(true);
        
        //dispatch(postProduct(formData));
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
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicdescription"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                {...register("description")}
                                type="text"
                                placeholder="Enter Description"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicprice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                {...register("price")}
                                type="number"
                                placeholder="Price"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicquantity"
                        >
                            <Form.Label>Quantity</Form.Label>
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
                            <Form.Label>Category</Form.Label>
                            <Form.Select {...register("categoryId")} required>
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

                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                        <AlertError show={show} setShow={setShow} />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddProduct;

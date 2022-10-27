import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ListCategories, swal, Weather } from "../components";
import { deleteCategory, pachCategory, postCategory } from "../store/slices/category.slice";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = data => {
        dispatch(postCategory(data));
    };
    return (
        <div>
            <Row>
                <Col sm="3" className="mt-3 text-center">
                    <ListCategories />
                    <Weather />
                </Col>
                <Col sm="8">
                    <Card className="mx-auto mt-3 text-center">
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
                    <UpdateCategory />
                    <DeleteCategory />
                </Col>
            </Row>
        </div>
    );
};

export const UpdateCategory = () => {
    const { register , handleSubmit } = useForm();
    const dispatch = useDispatch();
    let categories = useSelector(state => state.category);

    const submit = data => {
        
        if (data.name) {
           dispatch(pachCategory(data)); 
        }else{
            swal("Error", "You must enter a name category", "error");
        }
        
    };

    return (
        <Card className="mx-auto mt-3 text-center">
            <Card.Header>
                <Card.Title>Update Category</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form  onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formBasicCatrgoy">
                        <Form.Label>Choose Category</Form.Label>
                        <Form.Select
                            {...register("category")}
                            aria-label="Default select example"

                        >
                            {categories.length !== 0 &&
                                categories.categories.map(category => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label> New Category Name</Form.Label>
                        <Form.Control
                            {...register("name")}
                            type="text"
                            placeholder="Title"
                            
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                    
                </Form>
            </Card.Body>
        </Card>
    );
};

export const DeleteCategory = () => {
    const { register , handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = data => {        
        dispatch(deleteCategory(data.category));
    };

    let categories = useSelector(state => state.category);

    return (
        <Card className="mx-auto mt-3 text-center">
            <Card.Header>
                <Card.Title>Delete Category</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formBasicCatrgoy">
                        <Form.Label>Choose Category</Form.Label>
                        <Form.Select
                            {...register("category")}
                            aria-label="Default select example"

                        >
                            {categories.length !== 0 &&
                                categories.categories.map(category => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                        Delete
                    </Button>
                    
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddProduct;

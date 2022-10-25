import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoadingSwal } from "../components";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/user.slice";

const Signup = () => {
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required("La contraseña es requerida")
            .min(8, "La contraseña debe tener al menos 8 caracteres")
            .max(20, "La contraseña debe tener maximo 20 caracteres"),
        repeatPassword: Yup.string()
            .required("La contraseña es requerida")
            .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.isLoading);

    const submit = data => {
        LoadingSwal(isLoading)
        dispatch(registerUser(data))
        navigate("/login");
    };
    return (
        <div>
            <Card 
                style={{ maxWidth: "500px" }}
                className="mx-auto mt-5 text-center"
            >
                <Card.Body>
                    <h1>Sign Up</h1>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                {...register("name")}
                                type="text"
                                placeholder="Enter Names"
                                minLength="4"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                {...register("email")}
                                type="email"
                                placeholder="Enter email"
                                required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password (8 characters)</Form.Label>
                            <Form.Control
                                className={`form-control ${
                                    errors.password ? "is-invalid" : ""
                                }`}
                                {...register("password")}
                                type="password"
                                placeholder="Password"
                                minLength="8"
                                required
                            />
                            <div className="invalid-feedback">
                                {errors.password?.message}
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicRepeatPassword"
                        >
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                className={`form-control ${
                                    errors.repeatPassword ? "is-invalid" : ""
                                }`}
                                {...register("repeatPassword")}
                                type="password"
                                placeholder="Repeat Password"
                                minLength="8"
                                required
                            />
                            <div className="invalid-feedback">
                                {errors.repeatPassword?.message}
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                {...register("role")}
                                type="text"
                                placeholder="Enter role"
                                required
                            >
                                <option value="user">User</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                        <br />
                        <Form.Label>Already have an account? </Form.Label>
                        <a href="#/login"> Log in</a>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Signup;

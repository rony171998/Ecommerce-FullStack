import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/user.slice";
import { LoadingSwal } from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const validationSchema = 
        Yup.object().shape({
            email: Yup.string().email().required('El email es requerido'),
            password: Yup.string()
            .required('La contraseña es requerida')
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(20, 'La contraseña debe tener maximo 20 caracteres'),
        });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const navigate = useNavigate();

    const submit = data => {
        //LoadingSwal(isLoading);
        dispatch(login(data));
        navigate("/");
                      
    };

    return (
        <div>
            <Card
                style={{ maxWidth: "500px" }}
                className="mx-auto mt-5  text-center"
            >
                <Card.Body>
                    <h1>Login</h1>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Test data</Form.Label>
                            <br />
                            <Form.Label>Email: rony@gmail.com</Form.Label>
                            <br />
                            <Form.Label>Password: pass1234</Form.Label>
                            <br />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              className={`form-control ${
                                errors.email ? "is-invalid" : ""
                                }`}
                                {...register("email")}
                                type="email"
                                placeholder="Enter email"                               
                            />
                            
                            <div className="invalid-feedback">
                                {errors.email?.message}
                            </div>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className={`form-control ${
                                    errors.password ? "is-invalid" : ""
                                }`}
                                {...register("password")}
                                type="password"
                                placeholder="Contraseña"
                                
                            />
                            <div className="invalid-feedback">
                                {errors.password?.message}
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <br />
                        <Form.Label>Don't have an account? </Form.Label>
                        <a href="#/signup"> Sign Up</a>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;

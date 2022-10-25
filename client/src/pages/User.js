import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProducts } from "../store/slices/user.slice";
import { LoadingSwal, UserProducts } from "../components";

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let isLoading = useSelector(state => state.products.isLoading);

    const logout = () => {
        localStorage.setItem("token", "");
        navigate("/login");
    };

    useEffect(() => {
        dispatch(getMyProducts());
        
    }, [dispatch]);

    let user = useSelector(state => state.user);
    
    return (
        <>
            {isLoading ? (
                <LoadingSwal isLoading={isLoading} />
            ) : (
                <>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h1>{user.name}</h1>
                                    </Card.Title>
                                </Card.Header>

                                <Card.Body>
                                    <Card.Text>Correo: {user.email}</Card.Text>
                                    <Card.Text>
                                        Fecha Registro: {user.createdAt}
                                    </Card.Text>

                                    <Card.Text>Role: {user.role}</Card.Text>
                                    <Button onClick={logout}>Log out</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h1>Registrar</h1>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Crear una nueva categoria para mis productos
                                    </Card.Text>
                                    <Button
                                        onClick={() => navigate("/addCategory")}
                                    >
                                        Registrar Categoria
                                    </Button>
                                    <Card.Text>
                                        Registrar un nuevo producto para la
                                        venta
                                    </Card.Text>
                                    <Button
                                        onClick={() => navigate("/addProduct")}
                                    >
                                        Registrar Producto
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <UserProducts userproducts={user.products} />
                </>
            )}
        </>
    );
};

export default User;

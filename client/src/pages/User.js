import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProducts } from "../store/slices/products.slice";
import { LoadingScreen } from "../components";

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let user = useSelector(state => state.products);
    let isLoading = useSelector(state => state.products.isLoading);
    
    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userName", "");
        navigate("/login");
    };

    useEffect(() => {
        dispatch(getMyProducts());
    }, [dispatch]);
    
    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <h1>Profile {user.name}</h1>
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Card.Text>
                                Correo: {localStorage.getItem("user")}
                            </Card.Text>
                            <Card.Text>Role: {user.role}</Card.Text>
                            <Button onClick={logout}>Log out</Button>
                        </Card.Body>
                    </Card>
                    
                </>
                
            )}
        </>
    );
};

export default User;

import React, { useEffect } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarts, DelProductsToCart } from "../store/slices/cart.slice";
import { Emptyproduct, LoadingScreen } from "../components";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    let cart = useSelector(state => state.cart);
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);

    const removeItem = id => {
        dispatch(DelProductsToCart(id));
    };

    console.log(cart);

    return (
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>Cart</Card.Title>
            </Card.Header>
            <Card.Body>
                {isLoading ? (
                    <LoadingScreen />
                ) : 
                cart.productsinCarts?.length === 0 ? (
                    <Emptyproduct />
                ) : (
                    
                    <>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Sub Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cart.productsinCarts?.map(
                                    (cartItem, index) => (
                                        <tr
                                            className="table-light "
                                            key={index}
                                            onClick={() => navigate(`/products/${cartItem.productId}`)}
                                            style={{cursor:"pointer"}}
                                        >
                                            <td>{index + 1}</td>
                                            <td>{cartItem.product.title}</td>
                                            <td>{cartItem.quantity}</td>
                                            <td>$ {cartItem.product.price}</td>
                                            <td>
                                                ${" "}
                                                {cartItem.quantity *
                                                    cartItem.product.price}
                                            </td>

                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    removeItem(cartItem.productId
                                                    )
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                        
                        <Button className="mx-1" onClick={() => navigate("/cart/formdata")}>
                            Chekout
                        </Button>
                    </>
                )}
            </Card.Body>
        </Card>
    );
};

export default Cart;

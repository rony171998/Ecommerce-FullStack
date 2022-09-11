import React, { useEffect } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarts, DelProductsToCart } from "../store/slices/cart.slice";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);

    const removeItem = id => {
        dispatch(DelProductsToCart(id));
        dispatch(getCarts());
    };
    let cart = useSelector(state => state.cart);

    console.log(cart);

    return (
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>Cart</Card.Title>
            </Card.Header>
            <Card.Body>
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
                        {cart.productsinCarts?.map((cartItem ,index) => (
                            <tr className="table-light " key={cartItem.id}>
                                <td>{index+1}</td>
                                <td>{cartItem.product.title}</td>
                                <td>{cartItem.product.quantity}</td>
                                <td>$ {cartItem.product.price}</td>
                                <td>
                                    $ {cartItem.product.quantity * cartItem.product.price}
                                </td>

                                <Button
                                    variant="secondary"
                                    onClick={() => removeItem(cartItem.id)}
                                >
                                    Delete
                                </Button>
                            </tr>
                        ))}
                    </tbody>

                    <Button onClick={() => navigate("/cart/formdata")}>
                        Chekout
                    </Button>
                </Table>
            </Card.Body>

            
                
            
        </Card>
    );
};

export default Cart;

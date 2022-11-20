import React, { useEffect } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarts, DelProductsToCart, pachProductsToCart } from "../store/slices/cart.slice";
import { Emptyproduct, LoadingScreen } from "../components";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity, setQuantity] = React.useState();
    
    let cart = useSelector(state => state.cart);
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);

    const removeItem = id => {
        dispatch(DelProductsToCart(id));
    };

    const handleAddQuantity = (quantity, id) => {
        console.log(quantity++, id);
        dispatch(pachProductsToCart( id,quantity++));
       
    };

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
                            <thead className="text-center">
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
                                            className="table-light text-center"
                                            key={index}               
                                        >
                                            <td>{index + 1}</td>
                                            <td
                                                onClick={() => navigate(`/products/${cartItem.productId}`)}
                                                style={{cursor:"pointer" }}
                                            >
                                                <a className="card-link">{cartItem.product.title}</a>
                                                
                                            </td>
                                            <td className="input-group mx-auto">
                                                <Button>-</Button>
                                                <label className="input-group-text  mx-auto">{ cartItem.quantity}</label>                  
                                                <Button 
                                                    onClick={(e) => handleAddQuantity(cartItem.quantity, cartItem.productId)}
                                                >+</Button>
                                            </td>
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

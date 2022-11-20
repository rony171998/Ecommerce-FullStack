import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Emptyproduct, LoadingScreen } from "../components";
import { getPurchases } from "../store/slices/purchases.slice";

const Purchases = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchases);
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(getPurchases());
    }, [dispatch]);

    return (
        <Card>
            <Card.Header>
                <Card.Title>Purchases</Card.Title>
            </Card.Header>
            <Card.Body>
                {isLoading ? (
                    <LoadingScreen />
                ) : purchases.length === 0 ? (
                    <Emptyproduct />
                ) : (
                    <>
                        {purchases.map((purchaseItem, index) => (
                            <Table striped bordered hover key={index}>
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Sub Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchaseItem.cart?.productsinCarts.map(
                                        (productsinCartsItem, indexcart) => (
                                            <tr
                                                className="table-light"
                                                key={indexcart}
                                            >
                                                <td>
                                                    {
                                                        productsinCartsItem
                                                            .product.title
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        productsinCartsItem.quantity
                                                    }
                                                </td>
                                                <td>
                                                    ${" "}
                                                    {
                                                        productsinCartsItem
                                                            .product.price
                                                    }
                                                </td>
                                                <td>
                                                    ${" "}
                                                    {productsinCartsItem.quantity *
                                                        productsinCartsItem
                                                            .product.price}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2">Total</td>
                                        <td colSpan="1">
                                            {purchaseItem.createdAt}
                                        </td>
                                        <td>
                                            ${" " + purchaseItem.totalPrice}
                                        </td>
                                    </tr>
                                </tfoot>
                            </Table>
                        ))}
                    </>
                )}
            </Card.Body>
        </Card>
    );
};

export default Purchases;

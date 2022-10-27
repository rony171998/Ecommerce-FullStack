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
                ) : purchases.purchases?.length === 0 ? (
                    <Emptyproduct />
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Sub Total</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.purchases?.[0].cart?.productsinCarts.map(
                                (purchaseItem, indexcart) => 
                                    purchaseItem.status === "purchased" && (
                                
                                    <tr
                                        className="table-light"
                                        key={purchaseItem.product.id}
                                    >
                                        <td>{indexcart + 1}</td>
                                        <td>{purchaseItem.product.title}</td>
                                        <td>{purchaseItem.quantity}</td>
                                        <td>$ {purchaseItem.product.price}</td>
                                        <td>
                                            ${" "}
                                            {purchaseItem.quantity *
                                                purchaseItem.product.price}
                                        </td>
                                        <td>{purchaseItem.status}</td>
                                        <td>
                                            {" "}
                                            Created:{" "}
                                            {purchaseItem.createdAt.substr(
                                                0,
                                                16
                                            )}
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                )}
            </Card.Body>
        </Card>
    );
};

export default Purchases;

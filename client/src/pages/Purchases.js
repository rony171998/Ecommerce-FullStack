import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPurchases } from "../store/slices/purchases.slice";

const Purchases = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchases);
    console.log(purchases);

    useEffect(() => {
        dispatch(getPurchases());
    }, [dispatch]);

    return (
        <Card>
            <Card.Header>
                <Card.Title>Purchases</Card.Title>
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
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchases.purchases?.map((purchaseItem , index) => (
                            <>
                                {purchaseItem.cart?.productsinCarts.map(
                                    purchaseItem => (
                                        <tr
                                            className="table-light"
                                            key={purchaseItem.product.id}
                                        >
                                            <td>{index+1}</td>
                                            <td>
                                                {purchaseItem.product.title}
                                            </td>
                                            <td>
                                                {purchaseItem.product.quantity}
                                            </td>
                                            <td>
                                                $ {purchaseItem.product.price}
                                            </td>
                                            <td>
                                                ${" "}
                                                {purchaseItem.product.quantity *
                                                    purchaseItem.product.price}
                                            </td>
                                            <td>
                                                {purchaseItem.product.status}
                                            </td>
                                        </tr>
                                    )
                                )}
                                <td>
                                    {" "}
                                    Created:{" "}
                                    {purchaseItem.createdAt.substr(0, 16)}
                                </td>
                            </>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Purchases;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';

const Purchases = () => {

    const [purchases, setPurchases] = useState({});

    useEffect(() => {
        axios.get("/cart/purchases", getConfig()).then((res) => {
            setPurchases(res.data);

        });
    }, []);

    const getConfig = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    
    
    return (
        <div>

            <Card className="mt-3">
                <Card.Header>
                    <Card.Title>Purchases</Card.Title>
                </Card.Header>
                
            </Card>

            <table className="table table-hover">

                
                <thead>

                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub Price</th>
                        <th scope="col">Status</th>
                    </tr>

                </thead>
                
                {

                    purchases.purchases?.map((purchaseItem) => (
                        

                        <tbody key={purchaseItem.id}>

                            {
                                                               
                                purchaseItem.cart?.productsinCarts.map((purchaseItem) => (
                                    
                                    <tr className="table-light" key={purchaseItem.product.id} >
                                        
                                        <td >{purchaseItem.product.title}</td>
                                        <td >{purchaseItem.product.quantity}</td>
                                        <td>$ {purchaseItem.product.price}</td>
                                        <td>$ {purchaseItem.product.quantity * purchaseItem.product.price}
                                        </td>
                                        <td >{purchaseItem.product.status}</td>

                                    </tr>

                                ))
                            }<td> Created: {purchaseItem.createdAt.substr(0,10)}</td>

                        </tbody>

                    ))
                }

            </table>

        </div >
    );
};

export default Purchases;
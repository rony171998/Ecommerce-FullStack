import React from "react";
import { Card } from "react-bootstrap";

const Emptyproduct = () => {
    return (
        <Card className="text-center border-light">
            <Card.Header>
                <Card.Title>Sin Productos</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Img
                    style={{ width: "10rem" }}
                    src="https://img.icons8.com/dotty/80/40C057/clear-shopping-cart.png"
                />
            </Card.Body>
        </Card>
    );
};

export default Emptyproduct;

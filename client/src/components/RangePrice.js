import React, { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";

const RangePrice = ({products , setProduct , CategoryId}) => {
    const [priceRangeMin, setPriceRangeMin] = useState(0);
    const [priceRangeMax, setPriceRangeMax] = useState(1000);

    const searchProductByPrices =( priceRangeMin , priceRangeMax )=> {
        setProduct(          
            products.filter(productsItem => productsItem.categoryId === Number(CategoryId) && productsItem.price >= priceRangeMin && productsItem.price <= priceRangeMax)
        ) 
    }

    const deleteFilter = () => {
        setProduct(
            products.filter(productsItem => productsItem.categoryId === Number(CategoryId))
        );
        setPriceRangeMin(0);
        setPriceRangeMax(1000);
    }
    
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className="bg-primary">
                    <Card.Title className="text-white">
                        Range of prices
                    </Card.Title>
                </Card.Header>

                <Card.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>

                        <FormControl
                            placeholder="Precio Mínimo"
                            onChange={e => setPriceRangeMin(e.target.value)}
                            value={priceRangeMin}
                            type="Number"
                            min={0}
                            aria-label="amoun"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl
                            placeholder="Precio Limite"
                            onChange={e => setPriceRangeMax(e.target.value)}
                            value={priceRangeMax}
                            min={0}
                            type="Number"
                        />
                    </InputGroup>

                    <Button
                        variant="primary"
                        id="button-addon2"
                        onClick={() =>
                            searchProductByPrices(priceRangeMin, priceRangeMax)
                        }
                    >
                        Filter by price
                    </Button>
                    <Button
                        className="ms-2"
                        variant="danger"
                        onClick={() => deleteFilter()}
                    >
                        delete Filter
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RangePrice;

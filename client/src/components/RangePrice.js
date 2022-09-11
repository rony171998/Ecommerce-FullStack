import React, { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterProductsByPrices } from "../store/slices/products.slice";

const RangePrice = () => {
    const [priceRangeMin, setPriceRangeMin] = useState(0);
    const [priceRangeMax, setPriceRangeMax] = useState(1000);

    const dispatch = useDispatch();

    const searchProductByPrices =( priceRangeMin , priceRangeMax )=> {
        dispatch(filterProductsByPrices(priceRangeMin, priceRangeMax));
        
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
                            max={10000}
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
                            max={10000}
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
                </Card.Body>
            </Card>
        </div>
    );
};

export default RangePrice;

import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    Col,
    FormControl,
    InputGroup,
    ListGroup,
    Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  filterProductsByName, filterProductsByPrices, getProducts ,addProductsToCart ,pachProductsToCart ,} from "../store/slices/products.slice";
import { Weather , ProductCard, LoadingScreen, ListCategories } from "../components";



const Home = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [priceRangeMin, setPriceRangeMin] = useState(0);
    const [priceRangeMax, setPriceRangeMax] = useState(1000);
    const [quantity, setQuantity] = useState(1);

    const [products, setProducts] = useState(useSelector(state => state.products));

    const isLoading = useSelector((state) => state.isLoading);

    useEffect(() => {
        dispatch(getProducts());  
            
    }, [dispatch]);

    const searchProduct = id => {
        dispatch(filterProductsByName(id));
    };

    const searchProductByPrices =( priceRangeMin , priceRangeMax )=> {
      dispatch(filterProductsByPrices(priceRangeMin, priceRangeMax));
      
    } 

    const addToCard = (id) => {
        setQuantity(quantity + 1);
        if (quantity === 1) {
            
            dispatch(addProductsToCart(id, quantity));
        }else{
            
            dispatch(pachProductsToCart(id, quantity));
        }
        
    }

    
    return (
        <div>
            
            <Row>
                <Col lg={3} className="mb-3">
                    
                    <ListCategories setProducts={setProducts} products={products}/>
                    
                    <ListGroup className="mb-3">

                        <Card.Header className="bg-primary">
                            <Card.Title className="text-white">Range of prices</Card.Title>
                        </Card.Header>

                        <ListGroup.Item >                           

                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    $
                                </InputGroup.Text>
                                
                                <FormControl
                                    placeholder="Precio Mínimo"
                                    onChange={e => setPriceRangeMin(e.target.value)}
                                    value={priceRangeMin }
                                    type="Number"
                                    min={0}
                                    max={10000}
                                    aria-label="amoun"
                                />
                                                                
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    $
                                </InputGroup.Text>
                                <FormControl
                                placeholder="Precio Limite"
                                onChange={e => setPriceRangeMax(e.target.value)}
                                value={priceRangeMax }
                                min={0}
                                max={10000}
                                type="Number"
                                />                                                             
                              
                            </InputGroup>
                            
                            <Button variant="primary" 
                              id="button-addon2"
                              onClick={() => searchProductByPrices(priceRangeMin, priceRangeMax)}>
                              Filter by price
                            </Button>

                        </ListGroup.Item>

                    </ListGroup>
                  
                    <Weather/>

                </Col>
                <Col>
                    <InputGroup className="mb-2 mt-3">
                        <FormControl
                            placeholder="Search products"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        <Button
                            variant="outline-primary"
                            id="button-addon2"
                            onClick={() => searchProduct(search)}>
                            Search
                        </Button>

                    </InputGroup>
                    {isLoading && <LoadingScreen />}

                    <ProductCard addToCard={addToCard} products={products}/>
                </Col>
            </Row>
        </div>
    );
};

export default Home;

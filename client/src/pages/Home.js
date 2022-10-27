import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/products.slice";
import { Slider, ProductInHome, Skeleton , LoadingSwal  } from "../components";


const Home = () => {
    
    const isLoading = useSelector(state => state.isLoading);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts());
        }
           
    }, [dispatch]);
    
    return (
        <div>
            <Slider />

            <Row className="my-3">
                <Col>
                    {
                        isLoading ? 
                        <>
                            <LoadingSwal isLoading /> 
                            <Skeleton /> 
                        </> 
                        : <ProductInHome />  
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Home;

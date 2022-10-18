import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/products.slice";
import { Slider, ProductInHome, LoadingScreen, Skeleton } from "../components";

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    
    return (
        <div>
            <Slider />

            <Row className="my-3">
                <Col>
                    {
                        isLoading ?  <Skeleton /> : <ProductInHome />  
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Home;

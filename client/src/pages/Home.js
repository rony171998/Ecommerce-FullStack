import React, { lazy, Suspense, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/products.slice";
import { Slider, Skeleton } from "../components";
const ProductInHome =lazy(()=>import('../components/ProductInHome'))

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
                <Col>{isLoading ? <Skeleton /> : <ProductInHome />}</Col>
            </Row>
        </div>
    );
};

export default Home;

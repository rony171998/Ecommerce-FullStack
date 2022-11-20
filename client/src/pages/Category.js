import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    Emptyproduct,
    ListCategories,
    LoadingScreen,
    Paginations,
    ProductCard,
    RangePrice,
    Weather,
} from "../components";
import { getProducts } from "../store/slices/products.slice";

const Category = () => {
    let products = useSelector(state => state.products);
    const isLoading = useSelector(state => state.isLoading);
    let CategoryId = useParams().categoryId;
    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
        if (products.length) {
            setProduct(
                products.filter(
                    productsItem =>
                        productsItem.categoryId === Number(CategoryId)
                )
            );
        }
    }, [dispatch, CategoryId]);

    return (
        <div>
            <Row className="my-3">
                <Col md="3" className="text-center">
                    <ListCategories />
                    <RangePrice
                        products={products}
                        setProduct={setProduct}
                        CategoryId={CategoryId}
                    />
                    <Weather />
                </Col>
                <Col>
                    {isLoading ? (
                        <LoadingScreen />
                    ) : product.length === 0 ? (
                        <Emptyproduct />
                    ) : (
                        <>
                            <ProductCard products={product} />
                            <Paginations products={product} />
                        </>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default Category;

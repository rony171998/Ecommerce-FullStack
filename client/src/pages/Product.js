
import React from "react";
import { useSelector } from "react-redux";
import {  ProductDetail, SimilarProducts } from "../components";

const Product = () => {
    let products = useSelector(state => state.products);

    return (
        <div>
            <ProductDetail />           
            <SimilarProducts products={products} />                   
        </div>
    );
};

export default Product;

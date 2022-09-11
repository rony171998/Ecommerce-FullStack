import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Emptyproduct, ProductCard } from "../components";
import { getProducts } from "../store/slices/products.slice";

const Search = () => {
    const [product, setProduct] = useState([]);
    const search = useParams().search;
    let products = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        if (products.length) {
            setProduct(
                products.filter(productsItem =>
                    productsItem.title
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
            );
        }
    }, [search , dispatch]);

    return (
        <div>
            {product.length === 0 ? (
                <Emptyproduct />
                
            ) : (
                <ProductCard products={product} />
            )}
        </div>
    );
};

export default Search;

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Emptyproduct, Paginations, ProductCard } from "../components";
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
    }, [dispatch, search]);

    return (
        <div className="my-3">
            {product.length === 0 && search !== "all" ? (
                <Emptyproduct />
            ) : (
                <ProductCard products={product} />
            )}

            {search === "all" && (
                <>
                    <ProductCard products={products} />
                    <Paginations products={products} />
                </>
            )}
        </div>
    );
};

export default Search;

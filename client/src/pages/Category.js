import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ListCategories, Paginations, ProductCard, RangePrice  } from "../components"; 
import { getProducts } from "../store/slices/products.slice";
import { lazy , Suspense } from "react";



const Category = () => {
    const Weather = lazy(() => import("../components/Weather"));
    let products = useSelector(state => state.products);
    let CategoryId = useParams().categoryId;
    const dispatch = useDispatch();

    const [product , setProduct] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
        if (products.length) {
            setProduct(products.filter(productsItem => productsItem.categoryId === Number(CategoryId)));
        }
            
    }, [CategoryId , dispatch]);
    
    return (
        <div>
            <Row className="my-3">
                <Col lg={3}>
                    
                    <ListCategories />                   
                    <RangePrice />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Weather />
                    </Suspense>

                </Col>
                <Col>
                    {
                        product.length &&
                        (
                            <> 
                                <ProductCard products={product}/>
                                <Paginations  products={product}/>
                            </>
                        )

                    }
                    
                </Col>
            </Row>
                      
        </div>
    );
};

export default Category;
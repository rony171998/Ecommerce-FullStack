
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ListCategories, Paginations, ProductCard, RangePrice, Weather ,  } from "../components";

const Products = () => {
    let products = useSelector(state => state.products);

    return (
        <div>
            <Row className="my-3">
                <Col lg={3}>
                    
                    <ListCategories />                   
                    <RangePrice />                  
                    <Weather/>

                </Col>
                <Col>
                    
                    <ProductCard products={products}/>
                    <Paginations  products={products}/>
                </Col>
            </Row>
                      
        </div>
    );
};

export default Products;

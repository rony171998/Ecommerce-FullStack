import React from "react";
import { Pagination } from "react-bootstrap";
import {  useNavigate, useParams  } from "react-router-dom";

const Paginations = ({ products }) => {
    const navigate = useNavigate();
    const page = useParams().page;
    
    return (
        <div className="d-flex justify-content-center mt-3 ">
            {products.length > 12 && (
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    {products?.map(
                        (product, index) =>
                            index % 12 === 0 && (
                                <Pagination.Item 
                                key={product.id}                              
                                active={index / 12 + 1 === Number(page === undefined ? 1 : page)}
                                onClick={() => navigate(`page/${index / 12 + 1}`)}                           
                                >
                                    {index / 12 + 1}
                                </Pagination.Item>
                            )
                    )}

                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            )}
        </div>
    );
};

export default Paginations;

import React from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Paginations = ({ products }) => {
    const navigate = useNavigate();
    let page = useParams().page;
    const categoryId = useParams().categoryId;
    const search = useParams().search;

    const handlePage = id => {
        if (page === undefined) {
            navigate(`page/${id}`);
        } else if (categoryId === undefined) {
            navigate(`/search/${search}/page/${id}`);
        } else {
            navigate(`/category/${categoryId}/page/${id}`);
        }
    };

    

    const handleNext = () => {
        if (page === undefined) {
            page = 2;
            handlePage(page);
        } else if (parseInt(page) < products.length / 12) {
            page = parseInt(page) + 1;
            handlePage(page);
        }
        
    };

    const handlePrev = () => {
        if (page === undefined) {
            page = 1;
            handlePage(page);
        } else if (parseInt(page) > 1) {
            page = parseInt(page) - 1;
            handlePage(page);
        }
    };

    const handleFirst = () => {
        handlePage(1);
    };

    const handleLast = () => {
        handlePage(Math.ceil(products.length / 12));
    };

    return (
        <div className="d-flex justify-content-center mt-3 ">
            {products.length > 12 && (
                <Pagination>
                    <Pagination.First onClick={() => handleFirst()} />
                    <Pagination.Prev onClick={() => handlePrev()} />
                    {products?.map(
                        (product, index) =>
                            index % 12 === 0 && (
                                <Pagination.Item
                                    key={product.id}
                                    active={
                                        index / 12 + 1 ===
                                        Number(page === undefined ? 1 : page)
                                    }
                                    onClick={() => handlePage(index / 12 + 1)}
                                >
                                    {index / 12 + 1}
                                </Pagination.Item>
                            )
                    )}

                    <Pagination.Next onClick={() => handleNext()} />
                    <Pagination.Last onClick={() => handleLast()}/>
                </Pagination>
            )}
        </div>
    );
};

export default Paginations;

import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/slices/category.slice";

const Categories = ({setProducts , product}) => {
    let categories = useSelector(state => state.category);   
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.isLoading);

    useEffect(() => {
            
        dispatch(getCategories())
        
    }, [dispatch]);

    const selectCategory = id => {
        setProducts(product.filter(product => product.category.id === id));
    };
    return (
        <ListGroup className="mb-3 mt-3">
            <Card.Header className="bg-primary">
                <Card.Title className="text-white">Categories</Card.Title>
            </Card.Header>
            {categories.categories?.map(category => (
                <ListGroup.Item
                    action
                    key={category.id}
                    onClick={() => selectCategory(category.id)}
                >
                    {category.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Categories;

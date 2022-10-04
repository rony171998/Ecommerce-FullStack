import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../store/slices/category.slice";

const Categories = () => {
     
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
            
        dispatch(getCategories())
        
    }, [dispatch]);
    
    let categories = useSelector(state => state.category);  

    return (
        <ListGroup className="mb-3">
            <Card.Header className="bg-primary">
                <Card.Title className="text-white">Categories</Card.Title>
            </Card.Header>
            {categories.categories?.map(category => (
                <ListGroup.Item
                    action
                    key={category.id}
                    onClick={() => navigate(`/category/${category.id}`)}
                >
                    {category.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Categories;

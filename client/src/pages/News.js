import React, { useEffect, useState } from 'react';
import { filterCategory, filterHeadline, getNews } from '../store/slices/news.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Col, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const News = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ search, setSearch ] = useState("");
    const [ categories, setCategories ] = useState([]);

    const news = useSelector(state => state.news);

    useEffect(() => {
        dispatch(getNews());

        axios.get("https://news-app-academlo.herokuapp.com/categories/")
            .then(res => setCategories(res.data))
    }, [dispatch]);

    const filterNews = () => {
        dispatch(filterHeadline(search));
    }

    const selectCategory = (id) => {
        dispatch(filterCategory(id))
    }

    return (
        <div>
            <h1>Home</h1>

            <Row className="g-4">
                <Col lg={3} className="mb-4">
                    <h4>Categories</h4>
                    <ListGroup>
                        {
                            categories.map(category => (
                                <ListGroup.Item key={category.id} onClick={() => selectCategory(category.id)}>
                                    {category.name}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>


                <Col>
                
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search news"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={filterNews}>
                            Button
                        </Button>
                    </InputGroup>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            news.map(newsItem => (
                                <Col key={newsItem.id}>
                                    <Card style={{ cursor: "pointer" }} onClick={() => navigate(`/news/${newsItem.id}`)}>
                                        <Card.Img variant="top" src={newsItem.image} />
                                        <Card.Body>
                                            <Card.Title>{newsItem.headline}</Card.Title>
                                            <Card.Text>
                                                {newsItem.lead}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">{newsItem.date}</Card.Footer>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>



        </div>
    );
};

export default News;
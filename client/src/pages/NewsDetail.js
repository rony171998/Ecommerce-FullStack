import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory } from "../store/slices/news.slice";


const NewsDetail = () => {
  const [news, setNews] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();

  const newsList = useSelector((state) => state.news);

  useEffect(() => {
    
    axios.get("https://news-app-academlo.herokuapp.com/news/").then((res) => {
      const newsSearched = res.data.find(
        (newsItem) => newsItem.id === Number(id)
      );
      setNews(newsSearched);
      dispatch(filterCategory(res.data.category.id));
    });
  }, [dispatch, id]);

  console.log(news);

  return (
    <div>
      <h1>{news.headline}</h1>
      <img src={news.image} alt="" className="fluid-img" />

      {newsList.map((newsItem) => (
        <li>{newsItem.headline}</li>
      ))}
    </div>
  );
};

export default NewsDetail;

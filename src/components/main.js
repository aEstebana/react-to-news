import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomNews } from '../actions/fetchCustomNews';

const Main = () => {
  const [sources, setSources] = useState([]);
  const [source, setSource] = useState('');
  const [relevance, setRelevance] = useState('');

  const customNewsSelector = useSelector((state) => state.CustomSearch);

  const dispatch = useDispatch();

  const getCustomNews = (source, relevance) =>
    dispatch(fetchCustomNews(source, relevance));

  const getSources = () => {
    fetch('https://newapi.org/v1/sources?').then((res) => {
      console.log(customNewsSelector.customNews);
      return res.json();
    });
  };

  useEffect(() => {
    getSources();
  });

  const getNews = (e) => {
    console.log(source);
    e.preventDefault();
    if (source === '' || source === 'nothing') {
      console.log('there is no source selected');
    } else {
      getCustomNews(source, relevance);
      console.log(customNewsSelector.customNews);
    }
  };

  let news;
  if (customNewsSelector.customNews.length > 0) {
    news = (
      <div className="news">
        {customNewsSelector.customNews.map((x) => (
          <div className="post" key={x.title}>
            <img src={x.urlToImage} alt={x.title} />
            <h2>{x.title}</h2>
            <p>{x.description}</p>
          </div>
        ))}
      </div>
    );
  } else {
    news = <p>slect a source and relevance from the</p>;
  }
};

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomNews } from '../actions/fetchCustomNews';

const Main = () => {
  const [sources, setSources] = useState([]);
  const [source, setSource] = useState('');
  const [relevance, setRelevance] = useState('');

  const customNewSelector = useSelector((state) => state.CustomSearch);

  const dispatch = useDispatch();

  const getCustomNews = (source, relevance) =>
    dispatch(fetchCustomNews(source, relevance));
};

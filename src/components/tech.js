import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTech } from '../actions/fetchTech';

const Tech = () => {
  const techSelector = useSelector((state) => state.FetchTech);
  const dispatch = useDispatch();
  const getTechNews = () => dispatch(fetchTech());

  useEffect(() => {
    getTechNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section>
        <h2> Technology News</h2>
        <div className="news">
          {techSelector.techNews.map((x) => (
            <div className="post" key={x.title}>
              <img src={x.urlToImage} alt="news" />
              <h2>{x.title}</h2>
              <p>{x.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tech;

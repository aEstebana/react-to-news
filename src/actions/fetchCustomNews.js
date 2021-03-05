const apiNewKey = 'cbc098e20969447c81b6cec58b3372b4';
export function fetchCustomNews(source, relevance) {
  return function (dispatch) {
    fetch(
      `https://newsapi.org/v1/articles?source=${source}&sortBy=${relevance}&apiKey=${apiNewKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'FETCH_CUSTOM_NEWS', payload: res.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

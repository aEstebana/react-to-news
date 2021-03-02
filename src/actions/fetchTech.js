export function fetchTech() {
  return function (dispatch) {
    fetch(
      'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=cbc098e20969447c81b6cec58b3372b4'
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'FETCH_TECH', payload: res.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

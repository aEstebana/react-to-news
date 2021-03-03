const fetchTech = (
  state = {
    techNews: [],
  },
  action
) => {
  if (action.type === 'FETCH_TECH') {
    // eslint-disable-next-line no-param-reassign
    state = { ...state, techNews: action.payload };
  }

  return state;
};
export default fetchTech;

import { combineReducers } from 'redux';
import fetchTech from './fetchTech';
import customSearch from './customSearch';

const reducers = combineReducers({
  FetchTech: fetchTech,
  CustomSearch: customSearch,
});
export default reducers;

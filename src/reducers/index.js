import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import articlesFilter from './articlesFilter';
export default combineReducers({
  todos,
  visibilityFilter,
  articlesFilter
})
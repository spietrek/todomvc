import { combineReducers } from 'redux';
import todos from './todos';
import loading from './loading';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  loading,
  visibilityFilter,
});

export default rootReducer;

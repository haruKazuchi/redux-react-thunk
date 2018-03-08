import {combineReducers} from 'redux';
import nfl from './nfl_reducer';
import reducer from './reducer';

const rootReducer = combineReducers({
  nfl,
  reducer
});

export default rootReducer;
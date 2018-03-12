import {fromJS} from 'immutable';
import constant from '../constants';

const initialState = {
  nfl: [],
  error: false
}

export default function nflReducer(state= initialState, action){
  switch (action.type) {
    case constant.LOAD_SUCCESS: {
        console.log(action);
        state = fromJS(state);
        const nfl = state.getIn(['nfl']);
        console.log(nfl);
        return state.setIn(['nfl'], nfl.toSet().concat(fromJS(action.payload.result.data).toSet())).toJS();
    }
    case constant.LOAD_FAILED: {
        return {nfl: [], error: true}
    }
    default:
      return state;
  }
}
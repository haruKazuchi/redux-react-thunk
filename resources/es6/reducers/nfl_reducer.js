import {fromJS} from 'immutable';
const initialState = {
  nfl: [],
  error: false
}

export default function nflReducer(state= initialState, action){
  switch (action.type) {
    case 'LOAD_SUCCESS': {
        state = fromJS(state);
        const nfl = state.getIn(['nfl']);
        return state.setIn(['nfl'], nfl.toSet().concat(fromJS(action.payload.data).toSet())).toJS();
    }
    case 'LOAD_FAILED': {
        return {nfl: [], error: true}
    }
    default:
      return state;
  }
}
import {fromJS} from 'immutable';
import constant from '../constants';

const initialState = {
  counter: 0,
  fuga: ["a","b"]
}

export default function reducer(state = initialState, action){
  const stateImmu = fromJS(state);
  const counterImmutable = stateImmu.getIn(['counter']);

  switch (action.type) {
    case constant.INCREMENT: {
      const {param} = action.payload.number;
      return stateImmu.setIn(['counter'], counterImmutable + param).toJS();
    }
    case constant.DECREMENT: {
      return stateImmu.setIn(['counter'], counterImmutable + action.payload.number.param).toJS();
    }
    default:
      return state;
  }
}

import {fromJS} from 'immutable';

const initialState = {
  counter: 0,
  fuga: ["a","b"]
}

export default function reducer(state = initialState, action){
  const stateImmu = fromJS(state);
  const counterImmutable = stateImmu.getIn(['counter']);
  switch (action.type) {
    case 'INCREMENT': {
      return stateImmu.setIn(['counter'], counterImmutable + 1).toJS();
    }
    case 'DECREMENT': {
      return stateImmu.setIn(['counter'], counterImmutable - 1).toJS();
    }
    default:
      return state;
  }

}
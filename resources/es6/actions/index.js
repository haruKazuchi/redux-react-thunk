import {actionCreator} from 'redux-action-creator';
import Constant from '../constants';

export default {
  increment: actionCreator(Constant.INCREMENT, 'number'),
  decrement: actionCreator(Constant.DECREMENT, 'number'),
  asyncIncrement: actionCreator(Constant.ASYNC_INCRE),
  asyncDecrement: actionCreator(Constant.ASYNC_DECRE),
  dataNfl: actionCreator(Constant.LOAD),
  loadSuccess: actionCreator(Constant.LOAD_SUCCESS, 'result'),
  loadFailed: actionCreator(Constant.LOAD_FAILED,'error'),
}
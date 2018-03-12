import {takeEvery, call, put} from 'redux-saga/effects';
import Constant from '../constants';
import * as Api from '../api';
import Action from '../actions';

export default function* asyncDecrement(){
  yield takeEvery(Constant.ASYNC_DECRE,asyncDecre)
}

function* asyncDecre(){
  const {param}= yield call(Api.asyncDecreApi);
  yield put(Action.decrement({param}));
}
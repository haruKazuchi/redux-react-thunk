import {takeEvery, call, put} from 'redux-saga/effects';
import Constant from '../constants';
import * as Api from '../api';
import Action from '../actions';

export default function* asyncIncrement(){
  yield takeEvery(Constant.ASYNC_INCRE, asyncIncre)
}

function* asyncIncre(){
  const {param}= yield call(Api.asyncIncreApi);
  yield put(Action.increment({param}));
}
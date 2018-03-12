import {takeLatest, call, put} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import Constant from '../constants';
import * as Api from '../api';
import Action from '../actions';

export default function* dataNfl(){
  yield takeLatest(Constant.LOAD, getDataNfl)
}

function* getDataNfl(){
  yield call(delay,1000);
  try{
    const {data} = yield call(Api.dataNfl);
    yield put(Action.loadSuccess({data}));
  } catch(error){
    yield put(Action.laodFailed(error));
    console.error(error.message);
  }
}
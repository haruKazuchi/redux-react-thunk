import {fork} from 'redux-saga/effects';
import asyncIncrement from './async_increment';
import asyncDecrement from './async_decrement';
import dataNfl from './async_nfl';

export default function* root(){
  yield fork(asyncIncrement);
  yield fork(asyncDecrement);
  yield fork(dataNfl);
}
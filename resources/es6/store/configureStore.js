import {createStore, applyMiddleware} from 'redux';
import 'babel-polyfill';
import reducer from '../reducers';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSageMiddleware from 'redux-saga';
import RootSaga from '../sagas';

export default function configureStore(){
  const sagaMiddleware = createSageMiddleware();

  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        createLogger(),
        sagaMiddleware
      )
    )
  );
  sagaMiddleware.run(RootSaga);

  return store;
};
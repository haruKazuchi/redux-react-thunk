import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(){
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        createLogger(),
        thunk
      )
    )
  );

  return store;
};
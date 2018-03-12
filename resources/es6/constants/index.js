import {createTypes, async} from 'redux-action-creator';

export default createTypes([
  'INCREMENT',
  'DECREMENT',
  ...async('LOAD'),
  ...async('ASYNC_INCRE'),
  ...async('ASYNC_DECRE')
],'NFL');
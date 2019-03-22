import { createStore } from 'redux';
import { cookieInitState, cookieAction } from '../../../src/';

const store = createStore((state = { cookie: cookieInitState }, action) => {
  return cookieAction(state, action)(
    // reducer
    ({ type }) => {
      switch (type) {
        default:
          return state;
      }
    }
  );
});

export default store;

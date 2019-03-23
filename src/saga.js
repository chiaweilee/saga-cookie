/* eslint-disable no-param-reassign */
import forEach from 'aliba/lib/_/forEach';
import unpair from 'aliba/lib/key-value/unpair';
import $setCookie from 'aliba/lib/set-cookie';

export const forceUpdate = {
  type: 'cookie/__SAGA_COOKIE_FORCE_UPDATE__',
};

export const setCookie = layout => ({
  type: 'cookie/__SAGA_COOKIE_SET_COOKIE__',
  layout,
});

export default {
  namespace: 'cookie',
  state: unpair(document.cookie),
  subscriptions: {},
  reducers: {
    __SAGA_COOKIE_UPDATE_STATE__(state, { cookie }) {
      forEach(cookie, (value, key) => {
        if (value === null) {
          delete state[key];
          delete cookie[key];
        }
      });

      return Object.assign({}, state, cookie);
    },
    __SAGA_COOKIE_FORCE_UPDATE_STATE__(_, { cookie }) {
      return cookie;
    },
  },
  effects: {
    * __SAGA_COOKIE_SET_COOKIE__({ layout }, { put }) {
      yield $setCookie(layout);
      yield put({ type: '__SAGA_COOKIE_UPDATE_STATE__', cookie: layout });
    },
    * __SAGA_COOKIE_FORCE_UPDATE__(_, { put }) {
      yield put({
        type: '__SAGA_COOKIE_FORCE_UPDATE_STATE__',
        cookie: unpair(document.cookie),
      });
    },
  },
};

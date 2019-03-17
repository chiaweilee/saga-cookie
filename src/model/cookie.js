import unpair from 'aliba/lib/key-value/unpair';
import _setCookie from 'aliba/lib/set-cookie';
import _delCookie from 'aliba/lib/set-cookie/delCookie';

export const forceUpdate = {
  type: 'cookie/forceUpdate',
};

export const setCookie = layout => ({
  type: 'cookie/setCookie',
  layout,
});

export const DELETE = _delCookie;

export default {
  namespace: 'cookie',
  state: unpair(document.cookie),
  subscriptions: {},
  reducers: {
    update(state, { cookie }) {
      return cookie;
    },
  },
  effects: {
    * setCookie({ layout }, { put }) {
      yield _setCookie(layout);
      yield put({ type: 'forceUpdate' });
    },
    * forceUpdate(action, { put }) {
      yield put({ type: 'update', cookie: unpair(document.cookie) });
    },
  },
};

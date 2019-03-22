import unpair from 'aliba/lib/key-value/unpair';
import saga, { forceUpdate, setCookie } from './saga';
import $setCookie from 'aliba/lib/set-cookie';

export const cookieInitState = unpair(document.cookie);

export const cookieAction = function (state, action) {
  return function (next) {
    function getCookie() {
      return {
        cookie: unpair(document.cookie),
      };
    }

    switch (action.type) {
      case setCookie().type:
        $setCookie(action.layout)
        return {
          cookie: saga.reducers.__SAGA_COOKIE_UPDATE_STATE__(
            state && state.cookie ? state.cookie : {},
            {
              cookie: action.layout,
            }
          ),
        };
      case forceUpdate.type:
        return getCookie();
      default:
        if (typeof next === 'function') {
          return next(action);
        }
    }
  };
};

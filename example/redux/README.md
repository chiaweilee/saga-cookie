## Configuarition for Redux

#### Create Store

```javascript
import { createStore } from 'redux';
import { cookieInitState, cookieAction } from 'saga-cookie';

const store = createStore((state = { /* Init Cookie State 👉 */cookie: cookieInitState }, action) => {
  return cookieAction(state, action)( /* 👈 Init Cookie Action */
    // ⬇️ Your Reducer
    ({ type }) => {
      switch (type) {
        default:
          return state;
      }
    }
  );
});
```

#### Connect

```javascript
// src/pages/example.js
import { connect } from 'react-redux';

export default connect(
  state => state,
  dispatch => ({ dispatch })
)(App);
```

## Usage

*[Usage Docs](https://github.com/chiaweilee/saga-cookie)*

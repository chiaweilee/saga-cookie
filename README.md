# [Saga-Cookie](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/aliba/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/aliba.svg?style=flat)](https://www.npmjs.com/package/aliba) [![Coverage Status](https://img.shields.io/coveralls/chiaweilee/aliba/master.svg?style=flat)](https://coveralls.io/github/chiaweilee/aliba?branch=master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

redux-saga model for Cookie 🍪.

[![README](https://github.com/chiaweilee/saga-cookie/blob/master/_.jpg)]

## Installation

```
npm install saga-cookie
```

## Usage

### UmiJs

- Create model

```javascript
// src/models/cookie.js
export { default, forceUpdate, setCookie, DELETE } from 'saga-cookie';
```

- Connect

```javascript
// src/pages/example.js
export default withRouter(
  connect(({ cookie }) => ({ // ↩
    cookie, // ↩
  }))(Example)
);
```

- Render

```jsx
<h3>{this.props.cookie.a}</h3>
```

- Dispatch

```javascript
import { setCookie, DELETE } from 'saga-cookie';
```

```javascript
// update cookie
dispatch(setCookie({
  a: Math.random(),
}));
```

```javascript
// update cookie
dispatch(setCookie(
  (cookie) => {
    return {
      a: cookie.a + 1,
    }
  }
));
```

```javascript
// delete cookie
dispatch(setCookie({
  a: DELETE,
}));
```

- forceUpdate

*You should avoid to use manual operation to Cookie when using saga-cookie,*
**use `forceUpdate` if necessary.**

```javascript
import { forceUpdate } from 'saga-cookie';
```

```javascript
// force saga-cookie update
dispatch(forceUpdate));
```

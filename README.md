# [Saga-Cookie](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/aliba/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/aliba.svg?style=flat)](https://www.npmjs.com/package/aliba) [![Coverage Status](https://img.shields.io/coveralls/chiaweilee/aliba/master.svg?style=flat)](https://coveralls.io/github/chiaweilee/aliba?branch=master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Use Cookie as Redux state. 🍪

![Workflow](https://github.com/chiaweilee/saga-cookie/blob/master/_.jpg)

## Installation

```
npm install saga-cookie
```

## Configuarition

* [UmiJS Dva/Saga](https://github.com/chiaweilee/saga-cookie/blob/master/example/dva-umi)
* [Redux-Saga](#) *TODO*
* [Redux](https://github.com/chiaweilee/saga-cookie/blob/master/example/redux)

## Example

[Examples](https://github.com/chiaweilee/saga-cookie/blob/master/example/dva-umi)

## Usage

#### Render Cookie from Props

```jsx
{props.cookie.hello}
```

#### Dispatch Cookie

*setCookie is just like `React`'s `setState`*

```jsx
import { setCookie } from 'saga-cookie';

// set-cookie
dispatch(setCookie({
  hello: 'hello',
}));

dispatch(setCookie((cookie) => {
  return {
    hello: cookie.hello + ' saga cookie!',
  }
}, function () {
  // callback
}));

// delete cookie
dispatch(setCookie({
  hello: null,
}));
```

#### Force Update

*You should avoid to do manual operation to Cookies when using saga-cookie,*

**use `forceUpdate` to reload cookies from BOM**

```javascript
import { forceUpdate } from 'saga-cookie';
```

```javascript
// force saga-cookie update
dispatch(forceUpdate);
```

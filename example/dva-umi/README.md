## Usage for Dva/Umi

- Create model

```javascript
// src/models/cookie.js
export { default } from 'saga-cookie';
```

- Connect

```javascript
// src/pages/example.js
import { connect } from 'dva';

export default connect(({ cookie }) => ({
    cookie,
  }))(App);
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

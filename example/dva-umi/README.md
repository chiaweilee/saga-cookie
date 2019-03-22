## Configuarition for Dva/Umi

#### Create model

```javascript
// src/models/cookie.js
export { default } from 'saga-cookie';
```

#### Connect

```javascript
// src/pages/example.js
import { connect } from 'dva';

export default connect(({ cookie }) => ({
    cookie,
  }))(App);
```

## Usage

*[Usage Docs](https://github.com/chiaweilee/saga-cookie)*

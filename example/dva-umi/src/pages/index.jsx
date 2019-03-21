import React, { useState } from 'react';
import { connect } from 'dva';
import { withRouter } from 'react-router-dom';
import {
  /* forceUpdate, */ setCookie,
  DELETE,
} from '../../../../src/model/cookie';

function App({ dispatch, cookie }) {
  const [add, setAdd] = useState('hello');
  const [del, setDel] = useState('hello');
  const [addValue, setAddValue] = useState('saga-cookie');

  return (
    <div>
      <div>
        <label>
          <h3>set-cookie</h3>
          <pre>
            dispatch(setCookie({'{'}
            {`${add || ''}`}
            {`${add && addValue ? ': '.concat(addValue) : ''}`}
            {'}'}))
          </pre>
          <input
            value={add}
            onChange={({ target }) => {
              setAdd(target.value);
            }}
            placeholder={'cookie-name'}
          />
          :
          <input
            value={addValue}
            onChange={({ target }) => {
              setAddValue(target.value);
            }}
            placeholder={'cookie-value'}
          />
          <button
            onClick={() => {
              dispatch(
                setCookie({
                  [add]: addValue,
                })
              );
            }}
          >
            update
          </button>
        </label>
      </div>
      <div>
        <label>
          <h3>delete cookie</h3>
          <pre>
            dispatch(setCookie({'{'}
            {`${del || ''}`}
            {`${del ? ': DELETE' : ''}`}
            {'}'}))
          </pre>
          <input
            value={del}
            onChange={({ target }) => {
              setDel(target.value);
            }}
            placeholder={'cookie-name'}
          />
          :
          <input value={'DELETE'} readOnly />
          <button
            onClick={() => {
              dispatch(
                setCookie({
                  [del]: DELETE,
                })
              );
            }}
          >
            delete
          </button>
        </label>
      </div>
      <div
        style={{ backgroundColor: '#eee', marginTop: '30px', padding: '20px' }}
      >
        cookie:
        <pre>{JSON.stringify(cookie)}</pre>
      </div>
    </div>
  );
}

export default withRouter(
  connect(({ cookie }) => ({
    cookie,
  }))(App)
);

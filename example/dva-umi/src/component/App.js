/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import pair from 'aliba/lib/key-value/pair';
import { forceUpdate, setCookie } from '../../../../src/';

export default function ({ dispatch, cookie }) {
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
            {`${del ? ': null' : ''}`}
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
          <input value={'null'} readOnly />
          <button
            onClick={() => {
              dispatch(
                setCookie({
                  [del]: null,
                })
              );
            }}
          >
            delete
          </button>
        </label>
      </div>
      <div>
        <label>
          <h3>force-update</h3>
          <pre>dispatch(forceUpdate)</pre>
          {(!cookie || !cookie.test_force_update) ? (
            <button
              onClick={() => {
                const rnd = Math.floor(Math.random() * 1000);
                document.cookie = `test_force_update=${rnd}`;
                dispatch(forceUpdate);
              }}
            >
              test forceUpdate (add)
            </button>
          ) : (
            <button
              onClick={() => {
                document.cookie = `test_force_update=${pair({
                  value: '',
                  expires: 'Thu, 01 Jan 1970 00:00:01 GMT',
                })}`;
                dispatch(forceUpdate);
              }}
            >
              test forceUpdate (delete)
            </button>
          )}
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

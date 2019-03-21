import dva from 'dva';

if (process.env.NODE_ENV === 'develop') {
  require('why-did-you-update').whyDidYouUpdate(React);
}

const app = dva({
  initialState: {},
});

export default app;

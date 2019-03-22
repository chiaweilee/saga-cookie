import { connect } from 'dva';
import { withRouter } from 'react-router-dom';
import App from '../component/App';

export default withRouter(
  connect(({ cookie }) => ({
    cookie,
  }))(App)
);

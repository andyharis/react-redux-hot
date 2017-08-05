import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import configureStore from './redux/createStore';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

const store = configureStore();
const render = Component => {
  ReactDOM.render(<AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}
console.info(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  render(App);
} else {
  render(App)
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextApp = require('./containers/App').default;
      render(NextApp);
    });
  }
}
// Hot Module Replacement API

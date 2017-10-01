import React from 'react'
import ReactDOM from 'react-dom'
import App from './layout/App'
import configureStore from './redux/createStore';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {BrowserRouter, Link} from 'react-router-dom';

const store = configureStore();
const render = Component => {
  ReactDOM.render(<AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component/>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}
if (process.env.NODE_ENV === 'production') {
  render(App);
} else {
  render(App)
  if (module.hot) {
    module.hot.accept('./layout/App', () => {
      const NextApp = require('./layout/App').default;
      render(NextApp);
    });
  }
}
// Hot Module Replacement API

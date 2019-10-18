import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';
import GlobalStyled from './styles/global.js';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyled />
    </Provider>
  );
}

export default App;

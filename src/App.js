import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './Navbar/index';
import configStore from './store';

const App = () => (
  <Provider store={configStore}>
    <Navigation />
  </Provider>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import WorkoutsData from './workout/index';
import configStore from './store';

const App = () => {
  return (
    <Provider store={configStore}>
      <WorkoutsData />
    </Provider>
  );
}

export default App;

import React from "react";
import { Provider } from "react-redux";
// import WorkoutsData from './workout/index';
// import CaloriesData from "./Calories/index";
import NotepadData from "./Notepad/index";
import configStore from "./store";

const App = () => {
  return (
    <Provider store={configStore}>
      {/* <WorkoutsData /> */}
      {/* <CaloriesData /> */}
      <NotepadData />
    </Provider>
  );
};

export default App;

import React from "react";
import WorkoutsData from "../workout/index";
import CaloriesData from "../Calories/index";
import NotepadData from "../Notepad/index";
import HomePage from "../Home/index";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Signup from "../Auth/signup";
import Login from "../Auth/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Navigation() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Workouts" component={WorkoutsData} />
          <Route exact path="/Calories" component={CaloriesData} />
          <Route exact path="/Notepads" component={NotepadData} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;

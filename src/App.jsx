import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home, SignUp, Profile } from "pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

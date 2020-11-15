import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Home, SignUp, Profile } from "pages";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <div className="App">
      <Switch>
        <Route path="/profile" render={() => <Profile data={userData} />} />
        <Route path="/signup" render={() => <SignUp setData={setUserData} />} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;

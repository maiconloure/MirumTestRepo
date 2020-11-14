import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home, SignUp, Profile } from "components";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;

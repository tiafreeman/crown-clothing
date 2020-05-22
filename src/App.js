import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    );
  }
}

export default App;
import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
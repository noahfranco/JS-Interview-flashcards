import "./App.css";
import React, {Component} from "react";
import { BrowserRouter, Route} from "react-router-dom";

// compnents for router
import Register from "./components/Register";
import Login from "./components/Login";
import Card from "./components/Card";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/cards" component={Card} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
};

export default App;
import "./App.css";
import React, {Component} from "react";
import { BrowserRouter, Route, Link} from "react-router-dom";
import {PrivateRoute} from "./middleware/PrivateRoute";

// compnents for router
import Register from "./components/Register";
import Login from "./components/Login";
import Card from "./components/Card";
import Profile from "./components/Profile";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
            
            {/* Restricted Routes */}
            <PrivateRoute exact path="/cards" component={Card}/>
            <PrivateRoute exact path="/profile" component={Profile} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
};

export default App;
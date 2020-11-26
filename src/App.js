import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

// compnents for router
import Register from "./components/Register";
import Card from "./components/Card";
import Login from "./components/Login";

const App = () => {

  return (
    <div className="App">
      <div>
        {/* <Switch> */}
        <BrowserRouter>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/cards" component={Card} />
        </BrowserRouter>
        {/* </Switch> */}
      </div>
    </div>
  );
};

export default App;
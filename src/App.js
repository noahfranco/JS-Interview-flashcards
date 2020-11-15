import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {

  return (
    <div className="App">
      <h4>JavaScript Interview Flashcard Questions</h4>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default App;

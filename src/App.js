import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import GetCardContext from "./context/GetCardContext";
import CardFront from "./components/CardFront"

const App = () => {
  // state = {
  //     id: 0,
  //     question: "",
  //     answer: "",
  //     esay: 0,
  //     medium: 0,
  //     hard: 0
  // }

  // const [card, setCard] = useState([
  //   {
  //     id: 1,
  //     question: "What is DOM",
  //     answer:
  //       "DOM stands for Document Object Model is an interface (API) for HTML and XML documents. When the browser first reads (parses) our HTML document it creates a big object, a really big object based on the HTML document this is the DOM. It is a tree-like structure that is modeled from the HTML document. The DOM is used for interacting and modifying the DOM structure or specific Elements or Nodes.",
  //   },
  //   {
  //     id: 2, 
  //     question: "What is a prototype chain",
  //     answer:
  //       "Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through object.prototype.",
  //   },
  //   {
  //     id: 3, 
  //     question: "What is JSON and its common operations",
  //     answer:
  //       "JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json Parsing: Converting a string to a native object",
  //   },
  //   {
  //     id: 4, 
  //     question: "What are lambda or arrow functions",
  //     answer:
  //       "An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.",
  //   },
  //   {
  //     id: 5, 
  //     question: "What is a first class function",
  //     answer:
  //       "In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.",
  //   },
  // ]);

  return (
    <div className="App">
      <h4>JavaScript Interview Flashcard Questions</h4>
      <div>
        {/* <GetCardContext.Provider value={{ card, setCard }}> */}
          <Card />
        {/* </GetCardContext.Provider> */}
      </div>
    </div>
  );
};

export default App;

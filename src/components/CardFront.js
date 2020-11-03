import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardFront = (props) => {
  // props is passing the card object from Card.js component
  console.log("props from CardFront: ", props);

  const [isFlipped, setisFlipped] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setisFlipped(!isFlipped); // !flipped === true
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* Front of Card */}
        <div className="card">
          <p> {props.question} </p>
          <p> {props.easy} </p>
          <p> {props.medium} </p>
          <p> {props.hard} </p>
          <button onClick={(e) => handleClick(e)}> answer </button>
        </div>
        {/* Back of Card */}
        <div className="card">
          <p> {props.answer} </p>
          <button onClick={(e) => handleClick(e)}> question </button>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default CardFront;

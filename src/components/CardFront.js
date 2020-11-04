import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardFront = (props) => {
  // props is passing the card object from Card.js component
  console.log("props from CardFront: ", props);

  const [isFlipped, setisFlipped] = useState(false);
  // set difficulty-level state
  const [esayCount, setEsayCount] = useState({esay: 0})
  const [mediumCount, setMediumCount] = useState({medium: 0})
  const [hardCount, setHardCount] = useState({hard: 0})


  // increment the Esay count
  const esayCountFunction = () => {
    let esayClick = esayCount.esay + 1
    setEsayCount({
      esay: esayClick
    })
    console.log("esayCount: ", esayCount)
  }

  // increment the Medium count
  const mediumCountFunction = () => {
    let mediumClick = mediumCount.medium + 1
    setMediumCount({
      medium: mediumClick
    })
    console.log("mediumCount: ", mediumCount)
  }

    // increment the Hard count
  const hardCountFunction = () => {
    let hardClick = hardCount.hard + 1
    setHardCount({
      hard: hardClick
    })
    console.log("mediumCount: ", mediumCount)
  }

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
          <button onClick={(e) => handleClick(e)}> answer </button>
          {/* difficulty Level Votes */}
          <button onClick={(event) => esayCountFunction(event)}> Esay: {esayCount.esay} </button>
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

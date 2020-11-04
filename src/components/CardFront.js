import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CardFront = (props) => {
  // props is passing the card object from Card.js component
  console.log("props from CardFront: ", props);

  const [isFlipped, setisFlipped] = useState(false);
  // set difficulty-level state
  const [esayCount, setEsayCount] = useState({esay: 0})
  const [mediumCount, setMediumCount] = useState({medium: 0})
  const [hardCount, setHardCount] = useState({hard: 0})


  // To-do
  // set a deincrement for the each state
  // only allow one click per onClick()


  // increment the Esay state
  const esayCountFunction = () => {
    let esayClick = esayCount.esay + 1
    setEsayCount({
      esay: esayClick
    })
    console.log("esayCount: ", esayCount)
  }
  

  // increment the Medium state
  const mediumCountFunction = () => {
    let mediumClick = mediumCount.medium + 1
    setMediumCount({
      medium: mediumClick
    })
    console.log("mediumCount: ", mediumCount)
  }

    // increment the Hard state
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
          <div>
            <Label onClick={(event) => esayCountFunction(event)} as='a' color='teal'>
              Esay: {esayCount.esay}
            </Label>
            <Label onClick={(event) => mediumCountFunction(event)} as='a' color='yellow' tag>
              Medium: {mediumCount.medium}
            </Label>
            <Label onClick={(event) => hardCountFunction(event)} as='a' color='red' tag>
              Hard: {hardCount.hard}
            </Label>
          </div>
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
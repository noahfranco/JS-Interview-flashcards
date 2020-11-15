import React, { useState, useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import GetCardContext from "../context/GetCardContext"

const CardFront = (props) => {
  // props is passing the card object from Card.js component

  const [isFlipped, setisFlipped] = useState(false);
  // set difficulty-level state
  const [esayCount, setEsayCount] = useState({esay: 0})
  const [mediumCount, setMediumCount] = useState({medium: 0})
  const [hardCount, setHardCount] = useState({hard: 0})
 

  console.log("Card from CardFront: ", props)


  // increment the Esay state
  const esayAddFunction = () => {
    let addLike = esayCount.esay + 1
    setEsayCount({
      esay: addLike
    })
  }

  console.log("esayCount: ", esayCount.esay)

  const esaySubFunction = () => {
    let subLike = esayCount.esay - 1
    setEsayCount({
      esay: subLike
    })
  }
  
  // increment the Medium state
  const mediumAddFunction = () => {
    let mediumClick = mediumCount.medium + 1
    setMediumCount({
      medium: mediumClick
    })
  }

  console.log("mediumCount: ", mediumCount)

  const mediumSubFunction = () => {
    let mediumClick = mediumCount.medium - 1
    setMediumCount({
      medium: mediumClick
    })
  }

  // increment the Hard state
  const hardAddFunction = () => {
    let hardClick = hardCount.hard + 1
    setHardCount({
      hard: hardClick
    })
  }

  console.log("mediumCount: ", mediumCount)

  const hardSubFunction = () => {
    let hardClick = hardCount.hard - 1
    setHardCount({
      hard: hardClick
    })
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
          <div className="addMargin">
          <div className="addMargin">
            { mediumCount.medium === 1 || hardCount.hard === 1 ?
             // esay label tag is unclickable since other state is alrady filled 
            <Label as='a' color='teal'>
            Esay: {esayCount.esay}
          </Label> : ( esayCount.esay === 0 ?
          // if above is ture then execute below
          <Label onClick={(event) => esayAddFunction(event)} as='a' color='teal'>
          Esay: {esayCount.esay}
          </Label> :
            // subtrict one from esatCount object
            <Label onClick={(event) => esaySubFunction(event)} as='a' color='teal'>
            Esay: {esayCount.esay}
          </Label>
            ) 
            }
            </div> 
            <div className="addMargin">
            { esayCount.esay === 1 || hardCount.hard === 1 ? 
            // medium label tag is unclickable since other state is alrady filled 
            <Label as='a' color='yellow' tag>
              Medium: {mediumCount.medium}
            </Label> : (mediumCount.medium === 0 ?
            // if above is ture then execute below
            <Label onClick={(event) => mediumAddFunction(event)} as='a' color='yellow' tag>
            Medium: {mediumCount.medium}
          </Label> :
            // subtrict one from esatCount object
            <Label onClick={(event) => mediumSubFunction(event)} as='a' color='yellow' tag>
              Medium: {mediumCount.medium}
            </Label>
            )
            }
            </div> 
            <div className="addMargin">
            { esayCount.esay === 1 || mediumCount.medium === 1 ?
            // medium label tag is unclickable since other state is alrady filled 
            <Label  as='a' color='red' tag>
              Hard: {hardCount.hard}
            </Label> : (hardCount.hard === 0 ?
            // if above is ture then execute below
            <Label onClick={(event) => hardAddFunction(event)} as='a' color='red' tag>
            Hard: {hardCount.hard}
          </Label> : 
            // subtrict one from esatCount object
             <Label onClick={(event) => hardSubFunction(event)} as='a' color='red' tag>
             Hard: {hardCount.hard}
           </Label>
             )
            }
            </div> 
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
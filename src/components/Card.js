import React, { useEffect } from "react";
import CardFront from "./CardFront";
import FlashCardsGetActions from "../redux/actions/FlashCardsGetActions"
import { connect } from "react-redux";


const Card = (props) => {
  // props is being passed down from actions
  console.log("props: ", props)


  useEffect(() => {
    props.FlashCardsGetActions()
  }, [])

  return (
    <>
      {/* Mapping thorugh object */}
      <div>
        {props.card.card.map((cards) => (
          <CardFront
            key={cards.id}
            question={cards.question}
            answer={cards.answer}
            esay={cards.esay} 
            medium={cards.medium}
            hard={cards.hard}                                                                                  
          />
        ))}
      </div>
    </>
  );
};

const actionCall = { FlashCardsGetActions }

const mapStateToProps = state => {
  return { card: state.card }}

export default connect(mapStateToProps, actionCall)(Card);
import React, { useEffect } from "react";
import CardFront from "./CardFront";
import FlashCardsGetActions from "../redux/actions/FlashCardsGetActions"
import { connect } from "react-redux";
import { FlashCardsGetReducer } from "../redux/reducers/FlashCardsGetReducer";


const Card = (props) => {
  // props is being passed down from actions
  console.log("props: ", props.card)


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
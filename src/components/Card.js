import React, { useContext, useEffect } from "react";

import GetCardContext from "../context/GetCardContext";
import CardFront from "./CardFront";
import FlashCardsGetActions from "../redux/actions/FlashCardsGetActions"
import { connect } from "react-redux";


const Card = (props) => {
  // const { card } = useContext(GetCardContext);
  console.log("props: ", props.card)

useEffect(() => {
  FlashCardsGetActions()
}, [])

  return (
    <>
      {/* Mapping thorugh object */}
      <div>
        {props.card.card.map((cards) => (
          <CardFront
            id={cards.id}
            question={cards.question}
            answer={cards.answer}
            esay={cards.esay}
          />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { card: state.card }}

export default connect(mapStateToProps, FlashCardsGetActions)(Card);

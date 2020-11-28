import React, { Component } from "react";
import CardFront from "./CardFront";
import FlashCardsGetActions from "../redux/actions/FlashCardsGetActions"
import { connect } from "react-redux";

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // props is being passed down from actions
    console.log("props from Card: ", this.props)
  }
 

  componentDidMount() {
    this.props.FlashCardsGetActions()
  }

render() {
  return (
    <>
      {/* Mapping thorugh object */}
      <div>
        <div>
        <h4>JavaScript Interview Flashcard Questions</h4>
        </div>
        {this.props.card.card.map((cards) => (
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
 }
};

const actionCall = { FlashCardsGetActions }

const mapStateToProps = state => {
  return { card: state.card }
}

export default connect(mapStateToProps, actionCall)(Card);
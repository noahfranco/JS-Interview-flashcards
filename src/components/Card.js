import React, { Component } from "react";
import "../App.css";
import CardFront from "./CardFront";
import FlashCardsGetActions from "../redux/actions/FlashCardsGetActions"
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";

class Card extends Component {
  constructor(props) {
    super(props)
    // props is being passed down from actions
    console.log("props from Card: ", this.props)
  }
 

  componentDidMount() {
    this.props.FlashCardsGetActions()
  }

render() {
  return (
    <>
    <div>
      <NavBar />
      <h4>JavaScript Interview Flashcard Questions</h4> 
    </div> 
    <div className="cardBackGround"> 
      {/* Mapping thorugh object */}
      <div className="homePage"> 
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
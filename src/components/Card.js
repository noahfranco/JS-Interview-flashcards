import React, { Component } from "react";
import "../App.css";
import CardFront from "./CardFront";
import FlashCardsGetActions from "../redux/actions/FlashCardsGetActions"
import { connect } from "react-redux";
import NavBar from "./NavBar";

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
    console.log("this.state.search: ", this.state.search)
    console.log("props from Card: ", this.props)
  }
 
  componentDidMount() {
    this.props.FlashCardsGetActions()
  }


  handleSearch = (event) => {
    this.setState({
      ...this.state,
        search: event.target.value
    })
}

render() {
  const cards = this.props.card.card
  const filterSearch = cards.filter((cards) =>
  cards.question.toLowerCase().includes(this.state.search.toLowerCase())
)
  return (
    <>
    <div>
      <NavBar />
      <h4>JavaScript Interview Flashcard Questions</h4> 
    </div>

    <form>
    <input className="searchBar" icon='search' 
      placeholder='Search...' 
      value={this.state.search}
      onChange={this.handleSearch} 
      />
    </form>

    <div className="cardBackGround"> 
      {/* Mapping thorugh object */}
      <div className="homePage"> 
        {filterSearch.map((cards) => (
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
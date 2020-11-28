import React, {Component} from "react";
import ReactCardFlip from "react-card-flip";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class CardFront extends Component {
  // props is passing the card object from Card.js component
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
      // set difficulty-level state
      esay: 0,
      medium: 0,
      hard: 0
    }
  }

  // increment the Esay state
  esayAddFunction = () => {
    let addLike = this.state.esay + 1
    this.setState({
      esay: addLike
    })
  }

  esaySubFunction = () => {
    let subLike = this.state.esay - 1
    this.setState({
      esay: subLike
    })
  }
  
  // increment the Medium state
  mediumAddFunction = () => {
    let mediumClick = this.state.medium + 1
    this.setState({
      medium: mediumClick
    })
  }

  mediumSubFunction = () => {
    let mediumClick = this.state.medium - 1
    this.setState({
      medium: mediumClick
    })
  }

  // increment the Hard state
  hardAddFunction = () => {
    let hardClick = this.state.hard + 1
    this.setState({
      hard: hardClick
    })
  }

  hardSubFunction = () => {
    let hardClick = this.state.hard - 1
    this.setState({
      hard: hardClick
    })
  }


  handleClick = (event) => {
    event.preventDefault();
    this.setState((initialState) => ({isFlipped: !initialState.isFlipped})); // !flipped === true
  };

  render() {
    return (
      <>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          {/* Front of Card */}
          <div className="card">
            <p> {this.props.question} </p>
            <button onClick={(e) => this.handleClick(e)}> answer </button>
            {/* difficulty Level Votes */}
            <div className="addMargin">
            <div className="addMargin">
              { this.state.medium === 1 || this.state.hard === 1 ?
               // esay label tag is unclickable since other state is alrady filled 
              <Label as='a' color='teal'>
              Esay: {this.state.esay}
            </Label> : ( this.state.esay === 0 ?
            // if above is ture then execute below
            <Label onClick={(event) => this.esayAddFunction(event)} as='a' color='teal'>
            Esay: {this.state.esay}
            </Label> :
              // subtrict one from esatCount object
              <Label onClick={(event) => this.esaySubFunction(event)} as='a' color='teal'>
              Esay: {this.state.esay}
            </Label>
              ) 
              }
              </div> 
              <div className="addMargin">
              { this.state.esay === 1 || this.state.hard === 1 ? 
              // medium label tag is unclickable since other state is alrady filled 
              <Label as='a' color='yellow' tag>
                Medium: {this.state.medium}
              </Label> : (this.state.medium === 0 ?
              // if above is ture then execute below
              <Label onClick={(event) => this.mediumAddFunction(event)} as='a' color='yellow' tag>
              Medium: {this.state.medium}
            </Label> :
              // subtrict one from esatCount object
              <Label onClick={(event) => this.mediumSubFunction(event)} as='a' color='yellow' tag>
                Medium: {this.state.medium}
              </Label>
              )
              }
              </div> 
              <div className="addMargin">
              { this.state.esay === 1 || this.state.medium === 1 ?
              // medium label tag is unclickable since other state is alrady filled 
              <Label  as='a' color='red' tag>
                Hard: {this.state.hard}
              </Label> : (this.state.hard === 0 ?
              // if above is ture then execute below
              <Label onClick={(event) => this.hardAddFunction(event)} as='a' color='red' tag>
              Hard: {this.state.hard}
            </Label> : 
              // subtrict one from esatCount object
               <Label onClick={(event) => this.hardSubFunction(event)} as='a' color='red' tag>
               Hard: {this.state.hard}
             </Label>
               )
              }
              </div> 
            </div>
          </div>
          {/* Back of Card */}
          <div className="card">
            <p> {this.props.answer} </p>
            <button onClick={(e) => this.handleClick(e)}> question </button>
          </div>
        </ReactCardFlip>
      </>
    );
  }
};

export default CardFront;
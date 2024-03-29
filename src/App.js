// Dependencies and Files

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import card from "./card.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
    state = {
        card,
        clickedCard: [],
        score: 0
    };

    //when you click on a card it gets taken out of the array
    imageClick = event => {
        const currentCard = event.target.alt;
        const CardAlreadyClicked =
            this.state.clickedCard.indexOf(currentCard) > -1;

        //if you click on a card that has already been selected, the game is reset and cards reordered
        if (CardAlreadyClicked) {
            this.setState({
                card: this.state.card.sort(function (a, b) {
                    return 0.5 - Math.random();
                }),
                clickedCard: [],
                score: 0
            });
            alert("You lose. Play again?");

            //if you click on an available card, your score is increased and cards reordered
        } else {
            this.setState(
                {
                    card: this.state.card.sort(function (a, b) {
                        return 0.5 - Math.random();
                    }),
                    clickedCard: this.state.clickedCard.concat(
                        currentCard
                    ),
                    score: this.state.score + 1

                   
                },



                //if you get all cards corrent you get a congrats message and the game resets        
                () => {
                    if (this.state.score === 12) {
                        alert("Yay! You Win!");
                        this.setState({
                            card: this.state.Card.sort(function (a, b) {
                                return 0.5 - Math.random();
                            }),
                            clickedCard: [],
                            score: 0
                        });
                    }
                }
            );
        }
    };

 //the order of components to be rendered: navbar, jumbotron, friendcard, footer 
 render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topscore={this.state.topScore}
          message={this.state.message}
          messageClass={this.state.messageClass}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.card.map(card => (
            <FriendCard
              imageClick={this.imageClick}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
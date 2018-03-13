import React, { Component } from 'react';
import './App.css';

const LETTERS = 'ABCDEFGHIJKLMNOPKRSTUVWXYZ';
const PHRASES = [
  "BONJOUR LES AMIS",
  "LE SUPER JEU DU PENDU",
  "APPRENTISSAGE DE REACT",
];

class App extends Component {
  state = {
    phrase: this.chooseRandomPhrase(),
    letters: LETTERS.split(''),
    usedLetters: [],
    guesses: 0,
  }

  chooseRandomPhrase () {
    let index = Math.floor(Math.random() * Math.floor(PHRASES.length));
    return PHRASES[index]
  }

  handleClickLetter = (letter) => {
    if (this.isUsedLetter(letter)) {
      return
    }

    const { usedLetters } = this.state

    this.setState({
      usedLetters: [...usedLetters, letter],
      guesses: this.state.guesses + 1,
    })
  }

  isUsedLetter (letter) {
    return this.state.usedLetters.includes(letter)
  }

  computeDisplay() {
    const { phrase, usedLetters } = this.state

    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_')
    )
  }

  finish = () => {
    return !this.computeDisplay().includes("_")
  }

  newGame = () => {
    this.setState({
      usedLetters: [],
      guesses: 0,
      phrase: this.chooseRandomPhrase(),
    })
  }

  render() {
    const { letters, guesses } = this.state
    let actions = null;
    if (!this.finish()) {
      actions = <div className="letters">{letters.map((letter, index) => (
        <button className="btn btn-default" key={index} onClick={() => this.handleClickLetter(letter)} disabled={this.isUsedLetter(letter)}>{letter}</button>
      ))}</div>
    } else {
      actions = <p><button className="btn btn-default" onClick={this.newGame}>Recommencer un nouvelle partie</button></p>
    }

    return (
      <div className="App">
        <p className="phrase">{
            this.computeDisplay().split('').map((letter, index) => (
              <span className="letter" key={index}>{letter}</span>
            ))
          }</p>
        <p>Tentatives : {guesses}</p>
        {actions}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Score from './Score.js';
import MaskedWord from './MaskedWord.js';
import Button from './Button.js';

import * as WordGenerator from './WordGenerator.js';

const DEFAULT_STATE = {
    maskedWord : WordGenerator.generateMaskedWord(),
    usedLetters : new Set(),
    findedLetters : "",
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { ...DEFAULT_STATE }
  }

  computeDisplay(phrase, usedLetters, unknownCaracter = '_') {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter : unknownCaracter)
    )
  }

  letterClick = letter => {
    const { maskedWord, usedLetters } = this.state
    this.setState({ usedLetters: usedLetters.add(letter)})
    this.setState({ findedLetters: this.computeDisplay(maskedWord, usedLetters, '') })
  }

  getLetterStatut = letter => {
    const { usedLetters } = this.state
    return usedLetters.has(letter) ? 'hidden' : 'visible'
  }

  resetGame() {
    this.setState(DEFAULT_STATE)
    this.setState({usedLetters : new Set()})
    this.setState({maskedWord : WordGenerator.generateMaskedWord()})
  }

  playRender() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(letter => (
      <Button
        key={letter}
        value={letter}
        status={this.getLetterStatut(letter)}
        onClick={this.letterClick} />
    ));
  }

  winRender() {
    return (
      <div className="pendu-win-result">
        <h1 className="pendu-title">Bravo, vous avez gagné !</h1>
          <Button
            value="Recommencer"
            onClick={() => this.resetGame()} />
      </div>
    );
  }

  render() {
    const { maskedWord, usedLetters, findedLetters } = this.state
    const visibleWord = this.computeDisplay(maskedWord, usedLetters)
    const nbOfFindedDistinctLetters = new Set(findedLetters.split('')).size
    const score = (nbOfFindedDistinctLetters * 2) - (usedLetters.size - nbOfFindedDistinctLetters)
    console.log("render"+findedLetters+"-"+score+"-"+usedLetters.size)
    return (
      <div className="pendu">
        <header className="pendu-header">
          <img src={logo} className="pendu-logo" alt="logo" />
          <h1 className="pendu-title">Le Pendu</h1>
        </header>
        <Score points={score} />
        <MaskedWord word={visibleWord}/>
        {maskedWord.length === findedLetters.length ? this.winRender() : this.playRender()}
      </div>
    );
  }
}

export default App;

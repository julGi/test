import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Score from './Score.js';
import MaskedWord from './MaskedWord.js';
import Letter from './Letter.js';

class App extends Component {
  state = {
      maskedWord : this.generateMaskedWord(),
      usedLetters : new Set(),
      score : 0,
  }

  generateMaskedWord() {
    return "TEST";
  }

  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter : '_')
    )
  }

  letterClick = letter => {
    const { usedLetters } = this.state
    this.setState({ usedLetters: usedLetters.add(letter)})
  }

  getLetterStatut = letter => {
    const { usedLetters } = this.state
    return usedLetters.has(letter) ? 'hidden' : 'visible'
  }

  render() {
    const { maskedWord, usedLetters, score } = this.state
    const visibleWord = this.computeDisplay(maskedWord, usedLetters)
    return (
      <div className="pendu">
        <header className="pendu-header">
          <img src={logo} className="pendu-logo" alt="logo" />
          <h1 className="pendu-title">Le Pendu</h1>
        </header>
        <Score points={score} />
        <MaskedWord word={visibleWord}/>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(letter => (
          <Letter
            key={letter}
            value={letter}
            status={this.getLetterStatut(letter)}
            onClick={this.letterClick} />
        ))}
      </div>
    );
  }
}

export default App;

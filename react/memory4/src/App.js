import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame from './HallOfFame'
import HighScoreInput from './HighScoreInput.js'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 750

class App extends Component {

  state= {
    cards : this.generateCards(),
    currentPair : [], /* paire en cours de sélection par le joueur */
    guesses : 0,  /* Nombre de tentatives de la partie en cours */
    hallOfFame: null, // Meilleurs résultats
    matchedCardIndices : [],  /* liste des positions des cartes appartenant aux paires déjàs réussies */
  }

  // Arrow fx for binding
  displayHallOfFame = hallOfFame => {
    this.setState({ hallOfFame })
  }

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)

    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }

    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }

    return indexMatched ? 'visible' : 'hidden'
  }

  // Mise en place d'une fonction fléchée afin de lier le this principal à handleCardClick (évite des render inutiles)
  // Arrow fx for binding
  handleCardClick = index => {
    console.log(this)
    const { currentPair } = this.state

    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    this.handleNewPairClosedBy(index)
  }

  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
      /* reviens à la même chose que matchedCardIndices.concat(newPair) */
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  render() {
    const { cards, guesses, hallOfFame, matchedCardIndices } = this.state /* Utilisation des props pour permettre de recharger ce render à chaque changement */
    const won = matchedCardIndices.length === 4 //cards.length
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card,index) => (
          <Card
            index={index}
            card={card}
            feedback={this.getFeedbackForCard(index)}
            onClick={this.handleCardClick}
            key={index}
          />
        ))}
        {won && (
          hallOfFame ? (
            <HallOfFame entries={hallOfFame} />
          ) : (
            <HighScoreInput
              guesses={guesses}
              onStored={this.displayHallOfFame}
            />
          )
        )}
      </div>
    )
  }
}

export default App

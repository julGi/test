import React, { Component } from 'react';
import randomWords from 'random-words'; // Importe une librairie qui génère un mot en anglais

import './App.css';

import Count from './Count'
import Button from './Button'

// Toutes les lettres de l'alphabet
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


class App extends Component {
  
  state = {
    state: 0, // Etat du jeu qui change le personnage
    word: randomWords().toUpperCase(), // Mot généré aléatoirement en Anglais
    count: 0, // Score du joueur
    discovered: [], // Lettres trouvées
    usedLetters: [] // Lettres déjà utilisées
  }
  
  // Produit une représentation textuelle de l’état de la partie,
  // chaque lettre non découverte étant représentée par un _underscore_.
  computeDisplay(word, usedLetters) {
    return word.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_ ')
    )
  }
  
  // Dès qu'une lettre est cliquée
  handleLetterClick = (letter, index) => {
    const { word, count, usedLetters, discovered } = this.state
    
    const matched = word.includes(letter) // Si la lettre des dans le mot renvoie true
    const alreadyMatched = discovered.includes(letter) // Si la lettre a déjà été trouvé renvoie true
    const alreadyUsed = usedLetters.includes(letter) // Si une lettre a déjà été testé renvoie true
    
    if(matched){
      if(alreadyMatched){
        const newCount = count - 2 // Enlève 2 points au score
        
        this.setState({count: newCount})
      }else{
        const newCount = count + 2 // Ajoute 2 points au score
        
        const occurence = word.split("").filter(index => index === letter).length; // Recupère le nombre de fois que la lettre est présente dans le mot
        
        for (var i = 0; i < occurence; i++) {
          this.setState(prevState => ({
            discovered: [...prevState.discovered, letter], // Pour chaque occurence, on ajoute la lettre aux lettres trouvées
            count: newCount
          }))
        }
      
      }
    }else if(alreadyUsed){
      const newCount = count - 1 // Enlève 1 points au score
      
      this.setState(prevState => ({
        state: prevState.state + 1, // Change l'Etat du personnage
        count: newCount
      }))
    }else{
      const newCount = count - 1 // Enlève 1 points au score
      
      this.setState(prevState => ({
        usedLetters: [...prevState.usedLetters, letter], // Ajoute la lettre au lettres déjà testées
        state: prevState.state + 1, // Change l'Etat du personnage
        count: newCount
      }))
    }
    
    
  }
  
  restart = () => {
    console.log('Restarting')
    this.setState({count: 0, state: 0,  discovered: [], usedLetters:[], word: randomWords().toUpperCase(), keyboard: "visible"}) // Regénère le jeu
  }
  
  
  render() {
    const {count, word, discovered, state, usedLetters} = this.state
    const letters = LETTERS
    const won = discovered.length === word.length // Renvoie true si le mot est trouvé
    const loose = state === 11 // Renvoie true si le personnage est pendu
    
    
    return (
      <div className="App">
        <h1 className="center">Pendu</h1>
        <img className="center" src={`./src/img/${state}.jpg`} alt="pendu" />
        <Count count={count} />
        
        <h3 className="center">{this.computeDisplay(word, discovered)}</h3> 
        
        <div className={`center ${won ? "hidden" : "visible"} ${loose ? "hidden" : "visible"}`}> 
            {
              letters.map((letter, index) => (
                <Button
                  letter={letter}
                  key={index}
                  onClick={this.handleLetterClick}
                  feedback={usedLetters.includes(letter) ? 'matched' : 'disMatched'}
                />
              ))
            }
        </div>
          
        {won && 
          <div className="center">
              <h1>Bravo tu as gagné !</h1>
              <button onClick={this.restart}>Recommencer</button>
          </div>
        }
        
        {loose && 
          <div className="center">
              <h1>Tu as perdu !</h1>
              <button onClick={this.restart}>Recommencer</button>
          </div>
        }
        
        
        
      </div>
    );
  }
  
}

export default App;

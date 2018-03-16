import React from 'react'

import './index.css'

import ActionButton from '../ActionButton';

class HoneyTools extends React.Component {
  render() {
    return (
      <ActionButton action='shopping' onClick={() => console.log("Ouvre la fiche d'une nouvelle commande !")}/>
    )
  }
}

export default HoneyTools

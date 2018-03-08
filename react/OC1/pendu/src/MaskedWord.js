import React from 'react'
import PropTypes from 'prop-types'

import './MaskedWord.css'

const MaskedWord = ({ word }) => <h2 className="phrase">{word}</h2>

MaskedWord.propTypes = {
  word: PropTypes.string.isRequired
}

export default MaskedWord

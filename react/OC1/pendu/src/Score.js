import React from 'react'
import PropTypes from 'prop-types'

import './Score.css'

const Score = ({ points }) => <p className="score">Votre score : {points}</p>

Score.propTypes = {
  points: PropTypes.number.isRequired,
}

export default Score

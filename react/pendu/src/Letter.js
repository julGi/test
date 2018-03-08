import React from 'react'
import PropTypes from 'prop-types'

import './Letter.css'

const Letter = ({ value, status, onClick }) => (
  <div className={`letter ${status}`} onClick={() => onClick(value)}>
    <span className="symbol">{value}</span>
  </div>
)

Letter.propTypes = {
  value : PropTypes.string.isRequired,
  status : PropTypes.oneOf(['hidden','visible']).isRequired,
  onClick : PropTypes.func.isRequired,
}

export default Letter

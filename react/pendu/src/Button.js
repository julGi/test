import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ value, status = 'visible', onClick }) => (
  <div className={`Button ${status}`} onClick={() => onClick(value)}>
    <span className="symbol">{value}</span>
  </div>
)

Button.propTypes = {
  value : PropTypes.string.isRequired,
  status : PropTypes.oneOf(['hidden','visible']),
  onClick : PropTypes.func.isRequired,
}

export default Button

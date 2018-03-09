import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Button.css'

export default class Button extends Component{
    static propTypes = {
        letter: PropTypes.string.isRequired,
        feedback: PropTypes.oneOf([
            'disMatched',
            'matched',
        ]).isRequired,
        onClick: PropTypes.func.isRequired,
    }
    
    render(){
        const { letter, feedback, onClick } = this.props
        
        return(
                <button className={`button ${feedback}`} onClick={() => onClick(letter)}>{letter}</button> 
        )
    }
}
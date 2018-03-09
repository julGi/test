import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Count.css'

export default class Count extends Component{
    static propTypes = {
        count: PropTypes.number.isRequired
    }
    
    render(){
        return(
            <div className="count">Score : {this.props.count}</div> 
        )
    }
}
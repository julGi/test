import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap'

import shopping from './shopping.svg'
import modify from './modify.svg'
import remove from './remove.svg'

class ActionButton extends React.Component {

  _getIcon(action) {
    switch (action) {
      case 'shopping':
        return shopping;
      case 'modify' :
        return modify;
      case 'remove' :
        return remove;
      default :
    }
  }

  _getTooltip(action) {
    let tooltipText = "";
    switch (action) {
      case 'shopping':
        tooltipText = "Commander du miel"
        break;
      case 'modify':
        tooltipText = "Modifier la commande"
        break;
      case 'remove':
        tooltipText = "Supprimer la commande"
        break;
      default :
    }
    return (
      <Tooltip className="tooltip" id="tooltip">
        <strong>{tooltipText}</strong>
      </Tooltip>
    )
  }

  render() {
    const { className } = this.props;
    return (
      <span className={className}>
        <OverlayTrigger placement="left" overlay={this._getTooltip(this.props.action)}>
          <Button bsStyle="default" className="action-button">
            <img src={this._getIcon(this.props.action)} alt="" />
          </Button>
        </OverlayTrigger>
      </span>
    )
  }
}

ActionButton.propTypes = {
  action : PropTypes.oneOf(['shopping','modify','remove']).isRequired,
  className : PropTypes.string,
}

export default ActionButton

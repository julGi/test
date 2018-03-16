import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import ModalAlert from '../ModalAlert'

import shopping from './shopping.svg'
import modify from './modify.svg'
import remove from './remove.svg'

class ActionButton extends React.Component {

  state = {
    alertShow: false,
  }

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

  _clickEvent() {
    if (this.props.onClick === undefined) {
      this.setState({ alertShow: true })
    } else {
      this.props.onClick()
    }
  }

  render() {
    const { className } = this.props;
    let alertClose = () => this.setState({ alertShow: false });
    return (
      <span className={className}>
        <OverlayTrigger placement="right" overlay={this._getTooltip(this.props.action)}>
          <Button bsStyle="default" className="action-button" onClick={() => this._clickEvent()}>
            <img src={this._getIcon(this.props.action)} alt="" />
          </Button>
        </OverlayTrigger>
        <ModalAlert show={this.state.alertShow} onHide={alertClose} />
      </span>
    )
  }
}

ActionButton.propTypes = {
  action : PropTypes.oneOf(['shopping','modify','remove']).isRequired,  // Permet d'identifier le design et le tooltip du bouton
  className : PropTypes.string, // Style complémentaire que l'on voudrait ajouter au bouton
  onClick : PropTypes.func,     // Action du clic sur le bouton. Si ce n'est pas définit, une information de "dev en cours" apparait
}

export default ActionButton

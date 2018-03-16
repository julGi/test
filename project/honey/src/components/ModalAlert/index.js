import React from 'react'

import { Modal, Button } from 'react-bootstrap'

import './index.css'

class ModalAlert extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Attention !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Cette fonctionnalité n'est pas encore développée.
          </p>
          <p>
            Merci pour votre compréhension.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalAlert

import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import { Table } from 'react-bootstrap';
import ActionButton from '../ActionButton';

const HoneyCommandsTable = (datas) => (
  <Table striped bordered condensed hover className="center-elt">
    <thead>
      <tr>
        <th className="center-elt col1">Nom</th>
        <th className="center-elt col2">Quantité</th>
        <th className="center-elt col3">Etat</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        datas.datas.map((command) => (
          <tr key={command.id}>
            <td>{command.name}</td>
            <td>{command.quantite}</td>
            <td>{command.etat}</td>
            <td>
                <ActionButton action='modify'/>
                <ActionButton className="margin-left-10" action='remove'/>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
)

HoneyCommandsTable.propTypes = {
  datas : PropTypes.array.isRequired,
}

export default HoneyCommandsTable

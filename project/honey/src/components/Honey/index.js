// src/components/App/index.js
import React, { Component } from 'react';

//import classnames from 'classnames';

import HoneyTools from '../HoneyTools'
import HoneyCommandsTable from '../HoneyCommandsTable'

import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'

import logo from './logo.jpg';
import './style.css';

import  Collection from '../../tools/Collection'

const SERVICE_LOADING='Loading' // L'appel du service est en cours de chargement
const SERVICE_ERROR='Error'     // L'appel du service à remonté un erreur
const SERVICE_OK='OK'           // L'appel du service s'est effectué sans encombre

const SERVICE_URL = window.location.href.includes('3000') ? 'http://localhost:8080/api/datas' : '/api/datas' // Adaptation pour dev react et la prod (ou l'utilisation du serveur Node)

class Honey extends Component {
  state = {
    serviceStatus: SERVICE_LOADING,
    commands: new Map(),
  }

  loadingTableContent() {
    return (
      <div>Chargement en cours ...</div>
    )
  }

  fillTableContent(commands) {
   return (
      <Col className="content" md={12}><HoneyCommandsTable datas={commands}/></Col>
    )
  }

  errorTableContent() {
    return (
      <div>Chargement en erreur !</div>
    )
  }

  componentDidMount() {
    // Chargemet des données à travers l'API REST du serveur Node
    this.setState({serviceStatus: SERVICE_LOADING})
    axios.get(SERVICE_URL)
      .then((response) => {
        this.setState({serviceStatus: SERVICE_OK, commands: (new Collection(response.data.commands,"id")).getArray()})
      })
      .catch((error) => {
        this.setState({serviceStatus: SERVICE_ERROR})
      });
  }

  render() {
    const {serviceStatus, commands} = this.state
    return (
      <div className="honey">
        <Grid className="grid">
          <Row>
            <Col className="honey-header" md={12}>
              <img src={logo} className="honey-logo" alt="logo" /><h1>Honey</h1>
            </Col>
          </Row>
          <Row className="honey-tools">
            <Col md={10}></Col>
            <Col md={2}>
              <HoneyTools />
            </Col>
          </Row>
          <Row className="content">
            <Col className="content" md={12}>
              {
                serviceStatus === SERVICE_LOADING ? this.loadingTableContent() : (serviceStatus === SERVICE_ERROR || commands === undefined ? this.errorTableContent() : this.fillTableContent(commands))
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Honey;

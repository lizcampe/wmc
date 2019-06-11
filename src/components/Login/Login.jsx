

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import { getDataWithQuery } from '../../utils/api';
import storage from '../../utils/storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: false,
      loggedIn: false,
    }

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  updateUsername({target}) {
    this.setState({username: target.value, loginError: false});
  }

  updatePassword({target}) {
    this.setState({password: target.value, loginError: false});
  }

  checkUser(userData) {
    if (userData && userData.length) {
      storage.store('user', userData[0]);
      this.setState({loggedIn: true});
      // console.log(storage.retreive('user'));
    } else {
      this.setState({loginError: true});
    }
  }

  logIn() {
    getDataWithQuery(({...this.state}), 'users').then(this.checkUser);
  }

  render() {  //para los errores
    let alert = null;
    if (this.state.loggedIn) {
      return (<Redirect to="/list" />);
    }
    if (this.state.loginError) {
      alert = (<Alert variant="danger">Check password or username!</Alert>);
    }
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formUsername"> 
            <Form.Label>Username</Form.Label>
            <Form.Control   //con el componente se cambia el estado
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.updateUsername}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.updatePassword}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="button" onClick={this.logIn}>Log In</Button>
        </Modal.Footer>
        {alert}
      </Modal.Dialog>
    );
  }
}

export default Login;


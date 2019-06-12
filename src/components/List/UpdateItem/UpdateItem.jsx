import React, { Component } from 'react';

// Actions
import { patchData } from '../../../utils/api';

// Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import ItemForm from '../ItemForm/ItemForm';

class UpdateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };

    this.showError = this.showError.bind(this);
    this.update = this.update.bind(this);
  }

  showError() {
    this.setState({error: true});
  }

  update(data) {
    patchData('items', this.props.id, data).then(this.props.hide).catch(this.showError);
  }

  render() {
    const {name, description, value} = this.props;
    const alert = this.state.error && (<Alert variant="danger">Something went wrong</Alert>);
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ItemForm submit={this.update} data={{name, description, value}} />
        </Modal.Body>
        {alert}
      </Modal>
    );
  }
}

export default UpdateItem;

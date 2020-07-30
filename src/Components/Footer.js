import React, {Component} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default class Footer extends Component {
  state = {
    arrayContacts: undefined
  }

  componentDidMount() {
    axios.get('https://core.tbilisee.ge/api/ourContacts').then(res => {
      this.setState({arrayContacts: res.data})
    })
  }

  render(){
    if(!this.state.arrayContacts) {
      return "loading"; //TODO: Need Loading State
    }
    const {arrayContacts} = this.state;
  return (
    <footer className="footer ">
      <div className="footer-wr container-own">

  <Row xs={1} md={4} >
  <Col><h3 className="footer-cell__title">address</h3>
          <p className="footer-cell__subtitle">{arrayContacts.contacts.address}</p></Col>
    <Col>
    <h3 className="footer-cell__title">phone</h3>
          <p className="footer-cell__subtitle">
            <li>{arrayContacts.contacts.mobile}</li>
            <li>{arrayContacts.contacts.landline}</li>
          </p>
    </Col>
    <Col>
    <h3 className="footer-cell__title">socials</h3>
          <p className="footer-cell__subtitle">facebook, instagram, linkedin</p></Col>
    <Col>
      <h3 className="footer-cell__title">made by</h3>
      <a href="https://www.onesoul.io" className="footer-cell__subtitle onesoul">onesoul.io</a>
    </Col>
  </Row>

</div>
    </footer>
  );
}
}

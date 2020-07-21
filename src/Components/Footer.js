import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-wr container-own">

  <Row xs={1} md={4} >
    <Col><h3 className="footer-cell__title">adress</h3>
          <p className="footer-cell__subtitle">Betlemi str. 22 Tbilisi, Georgia</p></Col>
    <Col>
    <h3 className="footer-cell__title">phone</h3>
          <p className="footer-cell__subtitle">
            <li>+995 595 08 08 09</li>
            <li>+995 595 08 08 01</li>
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

export default Footer;

import React from 'react';
import { Container, Col, Row, Jumbotron, Button } from 'reactstrap';

import './App.css';
import { Header } from './modules/common/header/Header'
import { Footer } from './modules/common/footer/Footer'
import { Home } from './modules/home/Home'
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Home />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import ConverterPage from './ConverterPage';
import ExchangePage from './ExchangePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css';

const Routing = () => {

  const NotFound = () => {
    return <h3>404 Sorry, this page was not found</h3>
  }

  return(
    <Router>

      <Navbar collapseOnSelect expand="lg" className="align-items-center m-2">
        <NavbarBrand>
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <span className="brand fw-bold m-2 p-1" >accurrency</span>
          </Nav.Link>
        </NavbarBrand>
        <Navbar.Toggle id="navbar-toggler" className="mt-3 me-3"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="m-3">
            
            <Nav.Item className="ms-auto">
              <Nav.Link eventKey="1" as={Link} to="/currency-converter">converter</Nav.Link>
            </Nav.Item>

            <Nav.Item className="ms-auto">
              <Nav.Link eventKey="2" as={Link} to="/exchange-rates">exchange rates</Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/" exact component={ConverterPage} />
        <Route path="/currency-converter" component={ConverterPage} />
        <Route path="/exchange-rates" component={ExchangePage} />
        <Route component={NotFound} />
      </Switch>
      <footer className="container-fluid">
        <div className="row mx-4 pt-3">
          <div className="col-12 d-flex justify-content-between">
            <p>built by JR</p>
            <div>
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <span className="brand m-2 p-1 fw-bold">accurrency</span>
            </div>

            <div className="d-flex">
              <p className="mx-3">LinkedIn</p>
              <p>GitHub</p>
            </div>
            </div>
        </div>
      </footer>
    </Router>
  )
}

export default Routing;
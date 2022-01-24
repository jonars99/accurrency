import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import ConverterPage from './ConverterPage';
import ExchangePage from './ExchangePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css';

const Routing = () => {

  const NotFound = <h3>404 Sorry, this page was not found</h3>

  return(
    <Router>

      <Navbar collapseOnSelect expand="lg" className="nav-bar mx-2 mx-sm-4 pb-lg-0">
        <NavbarBrand className="mb-2 pe-0 me-0">
          <Nav.Link as={Link} to="/" id="nav-links" className="align-items-center d-flex">
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <span className="brand fw-bold ms-2 ps-1">accurrency</span>
          </Nav.Link>
        </NavbarBrand>

        <Navbar.Toggle id="navbar-toggler" className="mt-2 me-3"/>
        <Navbar.Collapse className="justify-content-end me-lg-3 navbar-dark">
          <Nav className="m-3 m-lg-0 mt-lg-2" defaultActiveKey={1}>
            
            <Nav.Item id="converter-tab" className="ms-auto mb-2 mb-lg-0" >
              <Nav.Link eventKey="1" as={Link} to="/currency-converter" className="m-0 p-0 mx-lg-3 tab" >converter</Nav.Link>
            </Nav.Item>

            <Nav.Item id="exchange-tab" className="ms-auto">
              <Nav.Link eventKey="2" as={Link} to="/exchange-rates" className="m-0 p-0 tab">exchange rates</Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <Routes>
        <Route path="/" exact element={<ConverterPage/>} />
        <Route path="/currency-converter" element={<ConverterPage/>} />
        <Route path="/exchange-rates" element={<ExchangePage/>} />
        <Route path="/*" element={NotFound} />
      </Routes>
      <footer className="container-fluid">
        <div className="row pt-3">
          <div className="col-12 d-flex justify-content-between">
            <p>built by JR</p>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <span className="brand ms-2 ps-1 fw-bold">accurrency</span>
            </div>

            <div className="d-flex">
              <p className="ms-3">LinkedIn</p>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  )
}

export default Routing;
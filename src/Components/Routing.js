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
        <NavbarBrand className="mb-2 me-0 pe-0">
          <Nav.Link as={Link} to="/" id="nav-links" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
            <span className="brand fw-bold ms-2 ps-1">accurrency</span>
          </Nav.Link>
        </NavbarBrand>

        <Navbar.Toggle id="navbar-toggler" className="mt-2 me-3"/>
        <Navbar.Collapse className="navbar-dark justify-content-end me-lg-3">
          <Nav className="m-3 m-lg-0 mt-lg-2" defaultActiveKey={1}>
            
            <Nav.Item id="converter-tab" className="ms-auto mb-2 mb-lg-0">
              <Nav.Link eventKey="1" as={Link} to="/currency-converter" className="tab m-0 p-0 mx-lg-3" >converter</Nav.Link>
            </Nav.Item>

            <Nav.Item id="exchange-tab" className="ms-auto">
              <Nav.Link eventKey="2" as={Link} to="/exchange-rates" className="tab m-0 p-0">exchange rates</Nav.Link>
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
      <footer id="footer" className="container-fluid">
        <div className="row py-3 mx-xl-4 px-xl-5">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-evenly justify-content-md-between px-md-5 px-xl-0">

            <a href="https://personal-portfolio-jr.netlify.app/" target="_blank" className="order-2 order-md-1 ms-3 my-2 ms-md-0">built by JR</a>

            <div className="d-flex align-self-center footer-brand order-1 order-md-2 pb-3">
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCircle} className="coin-icon"></FontAwesomeIcon>
              <span className="brand fw-bold ms-2 ps-1">accurrency</span>
            </div>

            <div className="d-flex order-3 my-2">
              <a href="/" className="ms-3">LinkedIn</a>
              <a href="https://github.com/jonars99" target="_blank" className="ms-3">GitHub</a>
            </div>

          </div>
        </div>
      </footer>
    </Router>
  )
}

export default Routing;
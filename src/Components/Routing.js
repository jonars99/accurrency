import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ConverterPage from './ConverterPage';
import ExchangePage from './ExchangePage';
import '../styles/style.css';

const Routing = () => {

  const NotFound = () => {
    return <h3>404 Sorry, this page was not found</h3>
  }

  return(
    <Router>
      <nav className="navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" role="navigation">accurrency</Link>
          <div className="d-flex">
            <Link to="/currency-converter" className="nav-link" role="navigation">converter</Link>
            <Link to="/exchange-rates" className="nav-link" role="navigation">exchange rates</Link>
          </div>
        </div>
      </nav>
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
            <p>accurrency</p>
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
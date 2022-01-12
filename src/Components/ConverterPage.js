import React, { useState, useEffect } from 'react';
import { checkStatus, json } from './utils';

const ConverterPage = () => {

  // states for input/output currency selection
  const [input, setInput] = useState('1');
  const [output, setOutput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  useEffect(() => {
    fetch(`https://altexchangerateapi.herokuapp.com/latest?amount=${input}&from=JPY&to=GBP`)
    .then(checkStatus)
    .then(json)
    .then((data) => {
      setOutput(data.rates.GBP);
    })
  })

  return(
    <div className="container-fluid">
      <div className="row p-5 converter">

          <div className="col-12">
            <div className="row converter-block p-5">

              <div className="col-5">
                <p>from</p>
                <input value={input} onChange={handleInput} className="form-control my-3" type="number" min="1"></input>    
                <select className="form-select">
                  <option value="jpy">JPY</option>
                  <option value="gbp">GBP</option>
                  <option value="usd">USD</option>
                  <option value="eur">EURO</option>
                </select>      
              </div>

              <div className="col-2 d-flex justify-content-center align-items-center">
                <button className="btn btn-warning">switch</button>
              </div>

              <div className="col-5">
                <p>to</p>
                <input value={output} className="form-control my-3" type="number" min="1"></input>
                <select className="form-select">
                  <option value="gbp">GBP</option>
                  <option value="jpy">JPY</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                </select>
              </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default ConverterPage;
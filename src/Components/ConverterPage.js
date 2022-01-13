import React, { useState, useEffect } from 'react';
import { checkStatus, json, Options } from './utils';

const ConverterPage = () => {

  // states for input/outputs and currency selection
  const [input, setInput] = useState('1');
  const [output, setOutput] = useState('');
  const [currencyInput, setCurrencyInput] = useState('GBP');
  const [currencyOutput, setCurrencyOutput] = useState('JPY');

  const handleInput = (event) => {
    if (currencyInput === currencyOutput) {
      setInput(event.target.value);
      setOutput(event.target.value);
    }
    setInput(event.target.value);
  }

  const handleCurrencyInput = (event) => {
    if (event.target.value === currencyOutput) {
      setOutput(input);
    }
    setCurrencyInput(event.target.value);
  }

  const handleCurrencyOutput = (event) => {
    if (event.target.value === currencyInput) {
      setOutput(input);
    }
    setCurrencyOutput(event.target.value);
  }

  useEffect(() => {
    if (input) {
      if ((input === output) && (currencyInput === currencyOutput)) {
        return
      }  
      else {
        fetch(`https://altexchangerateapi.herokuapp.com/latest?amount=${input}&from=${currencyInput}&to=${currencyOutput}`)
        .then(checkStatus)
        .then(json)
        .then((data) => {
          setOutput(data.rates[currencyOutput]);
        })
      }
    }
    else {
      return
    }
  })

  return(
    <div className="container-fluid">
      <div className="row p-5 converter">

          <div className="col-12">
            <div className="row converter-block p-5">

              <div className="col-5">
                <p>from</p>
                <input value={input} onChange={handleInput} className="form-control my-3" type="number" min="1"></input>    
                <Options handleCurrencyInput={handleCurrencyInput} name='currencies-in' />
              </div>

              <div className="col-2 d-flex justify-content-center align-items-center">
                <button className="btn btn-warning">switch</button>
              </div>

              <div className="col-5">
                <p>to</p>
                <p>{output}</p>
                <Options handleCurrencyOutput={handleCurrencyOutput} name="currencies-out" />
              </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default ConverterPage;
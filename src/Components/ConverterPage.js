import React, { useState, useEffect } from 'react';
import { checkStatus, json, Options } from './utils';
import $ from 'jquery';

const ConverterPage = () => {

  // states for input/outputs and currency selection
  const [input, setInput] = useState('1');
  const [output, setOutput] = useState('');
  const [currencyInput, setCurrencyInput] = useState('GBP');
  const [currencyOutput, setCurrencyOutput] = useState('JPY');
  const [buttonClick, setButtonClick] = useState(false);

  // handlers

  //input amount
  const handleInput = (event) => {
    if (currencyInput === currencyOutput) {
      setInput(event.target.value);
      setOutput(event.target.value);
    }
    buttonClick ? setOutput(event.target.value) : setInput(event.target.value);
  }

  //handle dropdown currency changes
  const handleCurrencyChange = (event) => {
    const id = event.target.id;
    if (id === 'currencies-in') {
      setCurrencyInput(event.target.value);
    }
    else if (id === 'currencies-out') {
      setCurrencyOutput(event.target.value);
    }

  }

  //button switches
  const buttonPress = buttonClick ? output : input;
  const currencyIn = buttonClick ? currencyOutput : currencyInput;
  const currencyOut = buttonClick ? currencyInput : currencyOutput;

  //switch currencies on button click
  const handleButton = () => {
    var firstDropDown = document.getElementById('currencies-in');
    var secondDropDown = document.getElementById('currencies-out')
    var firstCurrency = document.getElementById('currencies-in').value;
    var secondCurrency = document.getElementById('currencies-out').value;

    firstDropDown.value = secondCurrency;
    secondDropDown.value = firstCurrency;
    setButtonClick(buttonClick ? false : true);
  }

  //fetching data

  useEffect(() => {
    if (currencyInput === currencyOutput) {
      $('#diff-currencies').removeClass('visually-hidden');
      return null;
    }
    else {
      $('#diff-currencies').addClass('visually-hidden');
      fetch(`https://altexchangerateapi.herokuapp.com/latest?amount=${buttonPress}&from=${currencyIn}&to=${currencyOut}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        buttonClick ? setInput(data.rates[currencyOut]) : setOutput(data.rates[currencyOut]);
        console.log('in: ' + input, currencyInput + ' and out: ' + output, currencyOutput);
      })
    }
  })

  return(
    <div className="container-fluid">
      <div className="row p-5 converter">

          <div className="col-12">
            <div className="row converter-block p-5">

              {/** input amount of currency one **/}
              <div className="col-5">
                <p>from</p>
                <input value={buttonClick ? output : input} onChange={handleInput} id="amount-input" className="form-control my-3" type="number" min="1"></input>    
                <Options handleCurrencyChange={handleCurrencyChange} name={buttonClick ? 'currencies-out' : 'currencies-in'} />
              </div>

              {/**swtich currencies button **/}
              <div className="col-2 d-flex justify-content-center align-items-center">
                <button onClick={handleButton} className="btn btn-warning">switch</button>
              </div>

              {/** output of conversion **/}
              <div className="col-5">
                <p>to</p>
                <p>{buttonClick ? input : output}</p>
                <Options handleCurrencyChange={handleCurrencyChange} name={buttonClick ? 'currencies-in' : 'currencies-out'} />
              </div>

            </div>
            <p id="diff-currencies" className="fst-italic visually-hidden">Please choose two <span className="fw-bold">different</span> currencies </p>
          </div>
      </div>
    </div>
  )
}

export default ConverterPage;
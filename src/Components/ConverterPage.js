import React, { useState, useEffect, useRef } from 'react';
import { checkStatus, json } from './utils';
import Options from './Options';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ConverterChart from './ConverterChart';

const ConverterPage = () => {

  // set states for input/outputs and currency selection (default £1 GBP -> JPY)
  const [input, setInput] = useState('1');
  const [output, setOutput] = useState('');
  const [currencyInput, setCurrencyInput] = useState('GBP');
  const [currencyOutput, setCurrencyOutput] = useState('JPY');
  const [buttonClick, setButtonClick] = useState(false);

  // handlers

  //handle input amount
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
      })
      .catch((error) => {
        console.log(error);
      })
    }
  })

  // className order = bootstrap classes, my custom classes, margin/padding xs, m/p md, m/p lg 
  return(
    <div className="container-fluid">
      <div id="converter-page" className="row px-2 pb-5 px-md-5">
        
        <div className="col-12 d-flex justify-content-center my-3 mx-0 my-md-4 ">
          <h1 className="fw-bold p-2">currency converter</h1>
        </div>

        <div className="col-12 p-0">
          <div className="row flex-column align-items-center converter-block m-4 my-1 px-3 py-5 px-sm-5 flex-md-row m-md-0 px-md-3 px-lg-5 justify-content-xl-evenly p-xl-0">

            {/** input amount of currency one **/}
            <div id="input-block" className="col-12 col-md-5 d-flex flex-column align-items-center ">
              <p className="fw-light">from</p>
              <input value={buttonClick ? output : input} onChange={handleInput} id="amount-input" className="form-control text-center number-input mb-3 ps-4 my-md-3" type="number" min="1"></input>    
              <Options id="options" handleCurrencyChange={handleCurrencyChange} name={buttonClick ? 'currencies-out' : 'currencies-in'} defaultVal="GBP" />
            </div>

            {/**swtich currencies button **/}
            <div className="col-2 d-flex justify-content-center align-items-center switch-btn-col my-2 my-md-0">
              <button onClick={handleButton} className="btn btn-lg btn-warning rounded-circle switch-button"> 
                <FontAwesomeIcon icon={faArrowRight} className="d-flex switch-icon ms-1 ms-xl-2" ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faArrowLeft} className="d-flex switch-icon ms-xl-1" ></FontAwesomeIcon>
              </button>
            </div>

            {/** output of conversion **/}
            <div id="output-block" className="col-12 col-md-5 d-flex flex-column align-items-center ">
              <p className="fw-light">to</p>
              <p className="output-number my-md-3">{buttonClick ? input : output}</p>
              <Options handleCurrencyChange={handleCurrencyChange} name={buttonClick ? 'currencies-in' : 'currencies-out'} defaultVal="JPY" />
            </div>

          </div>
          <p id="diff-currencies" className="fst-italic visually-hidden ms-sm-4 ms-md-2 ms-xl-5">Please choose two <span className="fw-bold">different</span> currencies </p>
        </div>

        <div className="my-5">
          <ConverterChart currencyInput={currencyInput} currencyOutput={currencyOutput} redraw="true" />
        </div>

      </div>
    </div>
  )
}

export default ConverterPage;
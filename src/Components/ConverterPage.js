import React, { useState, useEffect } from 'react';
import { checkStatus, json } from './utils';

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
                <select name="currencies-in" className="form-select" onChange={handleCurrencyInput} defaultValue="GBP">
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="BGN">BGN - Bulgarian Lev</option>
                  <option value="BRL">BRL - Brazilian Real</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="CHF">CHF - Swiss Franc</option>
                  <option value="CNY">CNY - Chinese Renminbi Yuan</option>
                  <option value="CZK">CZK - Czech Koruna</option>
                  <option value="DKK">DKK - Danish Krone</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="HKD">HKD - Hong Kong Dollar</option>
                  <option value="HRK">HRK - Croatian Kuna</option>
                  <option value="HUF">HUF - Hungarian Forint</option>
                  <option value="IDR">IDR - Indonesian Rupiah</option>
                  <option value="ILS">ILS - Israeli New Sheqel</option>                  
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="ISK">ISK - Icelandic Króna</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="KRW">KRW - South Korean Won</option>
                  <option value="MXN">MXN - Mexican Peso</option>
                  <option value="MYR">MYR - Malaysian Ringgit</option>
                  <option value="NOK">NOK - Norwegian Krone</option>
                  <option value="NZD">NZD - New Zealand Dollar</option>
                  <option value="PHP">PHP - Philippine Peso</option>
                  <option value="PLN">PLN - Polish Złoty</option>
                  <option value="RON">RON - Romanian Leu</option>
                  <option value="RUB">RUB - Russian Ruble</option>
                  <option value="SEK">SEK - Swedish Krona</option>
                  <option value="SGD">SGD - Singapore Dollar</option>
                  <option value="THB">THB - Thai Baht</option>
                  <option value="TRY">TRY - Turkish Lira</option>
                  <option value="USD">USD - United States Dollar</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                </select>      
              </div>

              <div className="col-2 d-flex justify-content-center align-items-center">
                <button className="btn btn-warning">switch</button>
              </div>

              <div className="col-5">
                <p>to</p>
                <p>{output}</p>
                <select className="form-select" name="currencies-out" onChange={handleCurrencyOutput} defaultValue='JPY' >
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="BGN">BGN - Bulgarian Lev</option>
                  <option value="BRL">BRL - Brazilian Real</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="CHF">CHF - Swiss Franc</option>
                  <option value="CNY">CNY - Chinese Renminbi Yuan</option>
                  <option value="CZK">CZK - Czech Koruna</option>
                  <option value="DKK">DKK - Danish Krone</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="HKD">HKD - Hong Kong Dollar</option>
                  <option value="HRK">HRK - Croatian Kuna</option>
                  <option value="HUF">HUF - Hungarian Forint</option>
                  <option value="IDR">IDR - Indonesian Rupiah</option>
                  <option value="ILS">ILS - Israeli New Sheqel</option>                  
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="ISK">ISK - Icelandic Króna</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="KRW">KRW - South Korean Won</option>
                  <option value="MXN">MXN - Mexican Peso</option>
                  <option value="MYR">MYR - Malaysian Ringgit</option>
                  <option value="NOK">NOK - Norwegian Krone</option>
                  <option value="NZD">NZD - New Zealand Dollar</option>
                  <option value="PHP">PHP - Philippine Peso</option>
                  <option value="PLN">PLN - Polish Złoty</option>
                  <option value="RON">RON - Romanian Leu</option>
                  <option value="RUB">RUB - Russian Ruble</option>
                  <option value="SEK">SEK - Swedish Krona</option>
                  <option value="SGD">SGD - Singapore Dollar</option>
                  <option value="THB">THB - Thai Baht</option>
                  <option value="TRY">TRY - Turkish Lira</option>
                  <option value="USD">USD - United States Dollar</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                </select>
              </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default ConverterPage;
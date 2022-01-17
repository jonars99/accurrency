import React, { useState } from 'react';
import { checkStatus, json, Options, fetchCurrencyInfo } from './utils';
import ExchangeTable from './ExchangeTable';

const ExchangePage = () => {
  // information with flag, currency code, currency name and value for rates
  const currencyInfo = fetchCurrencyInfo();

  // set states for selected base amount and currency and exchange rate data
  const [amount, setAmount] = useState('1');
  const [base, setBase] = useState('GBP');
  const [exchangeRates, setExchangeRates] = useState([]);

  // handlers
    //change base currency on option change
  const handleBaseChange = (e) => {
    setBase(e.target.value);
  }

    // change base amount on option change
  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  }

  // request for exchange rates and updating state 
  const fetchRates = () => {
    fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${base}`)
    .then(checkStatus)
    .then(json)
    .then((data) => {
      const rates = data.rates;

      currencyInfo.map((item) => {
        //set base currency
        if (item.code === data.base) {
          item.value = data.amount;
        }
        //map rate values into currency info array
        if (rates.hasOwnProperty(item.code)) {
          item.value = rates[item.code];
        }
        return currencyInfo;
      })
      // update state
      setExchangeRates(currencyInfo);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return(
    <div className="container-fluid">
      <div className="row exchange-page p-5">
        <div className="col-12">
          <div className="row exchange-block justify-content-evenly py-5">

            <div className="col-3 base-wrapper">
              <p className="my-3">base</p>
              <input className="form-control my-3" type="number" min="1" value={amount} onChange={handleAmountInput}></input>
              <Options name='exchangeOptions' handleCurrencyChange={handleBaseChange}/>
              <button className="btn btn-light my-3" onClick={fetchRates} >Get rates</button>
            </div>

            <div className="col-7 table-wrapper">
              <ExchangeTable exchangeRates={exchangeRates} base={base} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangePage;
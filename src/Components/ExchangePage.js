import React, { useState } from 'react';
import { checkStatus, json, Options, fetchCurrencyInfo } from './utils';

const ExchangePage = () => {
  // information with flag, currency code, currency name and value for rates
  const currencyInfo = fetchCurrencyInfo();

  // set states for selected base amount and currency
  const [amount, setAmount] = useState('1');
  const [base, setBase] = useState('GBP');
  const [exchangeRates, setExchangeRates] = useState(currencyInfo);

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
      setExchangeRates(currencyInfo);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  //change base currency on option change
  const handleBaseChange = (e) => {
    setBase(e.target.value);
  }

  return(
    <div className="container-fluid">
      <div className="row exchange-page p-5">
        <div className="col-12">
          <div className="row exchange-block justify-content-evenly py-5">

            <div className="col-3 base-wrapper">
              <p className="my-3">base</p>
              <input className="form-control my-3" type="number" min="1" value={amount}></input>
              <Options name='exchangeOptions' handleCurrencyChange={handleBaseChange}/>
              <button className="btn btn-light my-3" onClick={fetchRates} >Get rates</button>
            </div>

            <div className="col-7 table-wrapper">
              <table className="table table-hover table-responsive">
                <thead>
                  <tr>
                    <th>flag</th>
                    <th>currency</th>
                    <th>rate</th>
                  </tr>
                </thead>
                <tbody>
                  {/** map each object (currency) into a row in the table **/}
                  {
                    exchangeRates.map((item, index) => {
                      return(
                        <tr key={index}>
                          <td>{item.flag}</td>
                          <td><span className="fw-bold">{item.code}</span> - {item.name}</td>
                          <td>{item.value}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangePage;
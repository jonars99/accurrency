import React, { useEffect, useState } from 'react';
import { checkStatus, json } from './utils';
import Options from './Options';
import ExchangeTable from './ExchangeTable';

const ExchangePage = () => {

  // information with flag, currency code, currency name and value for rates
  // const currencyInfo = info;

  // set states for selected base amount and currency and exchange rate data
  const [amount, setAmount] = useState('1');
  const [base, setBase] = useState('GBP');
  const [exchangeRates, setExchangeRates] = useState([]);

  // request for exchange rates and updating state
  const fetchRates = (arr, callback) => {
    fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${base}`)
    .then(checkStatus)
    .then(json)
    .then((response) => {
      console.log(response)
      const newRates = Object.keys(response.rates).map((key) => {
        return { code: key, value: response.rates[key] };
      })
      setExchangeRates(newRates);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // map fetched rate values into array
  // const updateRates = (arr, data) => {
  //   const rates = data.rates;
  //   arr.map((item) => {
  //     //base currency
  //     if (item.code === data.base) {
  //       item.value = data.amount;
  //     }
  //     //map rate values into array
  //     else if (rates.hasOwnProperty(item.code)) {
  //       item.value = rates[item.code];
  //     }
  //   })
  //   return arr;
  // }

  // handlers

  //change base currency on option change
  const handleBase = (e) => {
    setBase(e.target.value);
  }

  useEffect(() => {
    // console.log(base)
    fetchRates();
  }, [base]);

  //change base amount on input change
  const handleAmount = (e) => {
    setAmount(e.target.value);
  }

  //fetch new rates on button click
  // const handleButton = () => {
  //   // fetchRates(currencyInfo, updateRates);
  //   // setExchangeRates([{code: 'loading'}]);
  // }

  //set default exchange rates with £1 GBP
  const initialRates = () => {
    fetchRates();
  }
  
  useEffect(() => {
    initialRates();
  }, []);

  return(
    <div className="container-fluid">
      <div className="row exchange-page p-5">
        <div className="col-12">
          <div className="row exchange-block justify-content-evenly py-5">

            <div className="col-3 base-wrapper">
              <p className="my-3">base</p>
              <input className="form-control my-3" type="number" min="1" value={amount} onChange={handleAmount} ></input>
              <Options name='exchangeOptions' value={base} handleCurrencyChange={handleBase} />
            </div>

            <div className="col-7 table-wrapper">
              <ExchangeTable exchangeRates={exchangeRates} base={base} amount={amount} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangePage;;
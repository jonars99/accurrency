import React from 'react';
import { info } from './utils';

const ExchangeTable = ({ exchangeRates, base, amount }) => {

  // map each object (currency) from exchangeRates into a row in the table

  // set base currency to the top as table header
  let baseFlag;
  let baseName;
  
  for (var i=0; i < info.length; i++) {
    if (info[i].code === base) {
      baseFlag = info[i].flag;
      baseName = info[i].currencyName;
      break;
    }
  }

  const tableTop = (
    <tr key={i}>
      <th>{baseFlag}</th>
      <th>{base} - {baseName}</th>
      <th>{amount}</th>
    </tr>
  )

  // rest of exchange rates
  const restOfRates = info.filter((item) => item.code !== base);

  const tableData = exchangeRates.map((item, i) => {
    return(
      <tr key={i}>
        <td><span role="img" aria-label="flag emoji of currency country">{restOfRates[i].flag}</span></td>
        <td>{item.code} - {restOfRates[i].currencyName}</td>
        <td>{(item.value * amount).toFixed(2)}</td>
      </tr>
    )    
  });

  return(
    <table className="table table-hover table-responsive">
      <thead>
        { tableTop }
      </thead>
      <tbody>
        { tableData }
      </tbody>
    </table>

  )
}

export default ExchangeTable;
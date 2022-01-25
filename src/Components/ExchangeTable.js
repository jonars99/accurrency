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
      <th className="heading-flag">{baseFlag}</th>
      <th className="heading-base">{base} - {baseName}</th>
      <th className="heading-amount">{amount}</th>
    </tr>
  )

  // rest of exchange rates
  const restOfRates = info.filter((item) => item.code !== base);

  const tableData = exchangeRates.map((item, i) => {
    return(
      <tr key={i}>
        <td><span role="img" aria-label="flag emoji of currency country">{restOfRates[i].flag}</span></td>
        <td>{item.code} - {restOfRates[i].currencyName}</td>
        <td className="text-xl-center">{(item.value * amount).toFixed(2)}</td>
      </tr>
    )    
  });

  return(
    <table id="exchange-table" className="table table-hover">
      <thead className="d-xl-none">
        {tableTop}
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>

  )
}

export default ExchangeTable;
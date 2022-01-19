import React from 'react';

const ExchangeTable = ({ exchangeRates, base, amount }) => {

  // map each object (currency) from exchangeRates into a row in the table
  
  // set base currency to the top as table header
  const tableTop = exchangeRates.map((item, i) => {
    if (item.code === base) {
      return(
        <tr key={i}>
          <th>{item.flag}</th>
          <th>{item.code}</th>
          <th>{amount}</th>
        </tr>
      )
    }
  })

  // rest of exchange rates
  const tableData = exchangeRates.map((item, i) => {
    if (item.code !== base) {
      return(
        <tr key={i}>
          <td>{item.flag}</td>
          <td><span className="fw-bold">{item.code}</span> - {item.name}</td>
          <td>{item.value}</td>
        </tr>
      )
    }
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
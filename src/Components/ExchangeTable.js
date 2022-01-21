import React from 'react';

const ExchangeTable = ({ exchangeRates, base, amount }) => {

  // map each object (currency) from exchangeRates into a row in the table
  

  console.log(base, amount)
  // set base currency to the top as table header
  const tableTop = (
    <tr>
      <th>-</th>
      <th>{base}</th>
      <th>{amount}</th>
    </tr>
  )

  // rest of exchange rates
  const tableData = exchangeRates.map((item, i) => {
    if (item.code !== base) {
      return(
        <tr key={i}>
          <td>{item.flag}</td>
          <td><span className="fw-bold">{item.code}</span> - {item.name}</td>
          <td>{item.value * amount}</td>
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
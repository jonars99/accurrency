import React from 'react';

const ExchangeTable = (props) => {

  // map each object (currency) into a row in the table 
  const tableTop = props.exchangeRates.map((item, i) => {
    if (item.code === props.base) {
      console.log(item.code);
      return(
        <tr key={i}>
          <th>{item.flag}</th>
          <th>{item.code}</th>
          <th>{item.value}</th>
        </tr>
      )
    }
    return null;
  });

  const tableData = props.exchangeRates.map((item, i) => {
    if (item.code !== props.base) {
      return(
        <tr key={i}>
          <td>{item.flag}</td>
          <td><span className="fw-bold">{item.code}</span> - {item.name}</td>
          <td>{item.value}</td>
        </tr>
      )
    }
    return null;
  });

  return(
    <table className="table table-hover table-responsive">
      <thead>
        {tableTop}
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>

  )
}

export default ExchangeTable;
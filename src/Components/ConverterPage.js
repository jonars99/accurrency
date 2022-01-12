import React from 'react';

const ConverterPage = () => {
  return(
    <div className="container-fluid">
      <div className="row p-5 converter">

          <div className="col-12">
            <div className="row converter-block p-5">

              <div className="col-5">
                <p>from</p>
                <input className="form-control my-3" type="number" min="1"></input>    
                <select className="form-select">
                  <option value="jpy">JPY</option>
                  <option value="gbp">GBP</option>
                  <option value="usd">USD</option>
                  <option value="eur">EURO</option>
                </select>      
              </div>

              <div className="col-2 d-flex justify-content-center align-items-center">
                <button className="btn btn-warning">switch</button>
              </div>

              <div className="col-5">
                <p>to</p>
                <input className="form-control my-3" type="number" min="1"></input>
                <select className="form-select">
                  <option value="gbp">GBP</option>
                  <option value="jpy">JPY</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                </select>
              </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default ConverterPage;
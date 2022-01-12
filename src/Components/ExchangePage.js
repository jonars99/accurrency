import React from 'react';

const ExchangePage = () => {
  return(
    <div className="container-fluid">
      <div className="row exchange-page p-5">
        <div className="col-12">
          <div className="row exchange-block justify-content-evenly py-5">

            <div className="col-3 base-wrapper">
              <p className="my-3">base</p>
              <input className="form-control my-3" type="number" min="1"></input>
              <select className="form-select">
                <option>GBP</option>
                <option>JPY</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            <div className="col-7 table-wrapper">
            <table class="table table-hover table-borderless table-responsive">
              <thead>
                <tr>
                  <th scope="col">flag</th>
                  <th scope="col">currency</th>
                  <th scope="col">value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><span className="fw-bold">EUR</span> - EURO</td>
                  <td>0.1234</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td><span className="fw-bold">GBP</span> - British Pound Sterling</td>
                  <td>1.2345</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td><span className="fw-bold">JPY</span> - Japanese Yen</td>
                  <td>1.2345</td>
                </tr>
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
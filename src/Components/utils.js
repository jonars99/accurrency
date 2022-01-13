export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error('Request was either a 404 or 500');
}

export const json = (response) => response.json();

export const Options = (props) => {
  let type;
  let defaultVal;
  if (props.name === "currencies-in") {
    type = props.handleCurrencyInput;
    defaultVal = 'GBP'
  }
  else if (props.name === "currencies-out") {
    type = props.handleCurrencyOutput;
    defaultVal = 'JPY'
  }

  return(
    <select className="form-select" name={props.name} onChange={type} defaultValue={defaultVal} >              
      <option value="AUD">AUD - Australian Dollar</option>
      <option value="BGN">BGN - Bulgarian Lev</option>
      <option value="BRL">BRL - Brazilian Real</option>
      <option value="CAD">CAD - Canadian Dollar</option>
      <option value="CHF">CHF - Swiss Franc</option>
      <option value="CNY">CNY - Chinese Renminbi Yuan</option>
      <option value="CZK">CZK - Czech Koruna</option>
      <option value="DKK">DKK - Danish Krone</option>
      <option value="EUR">EUR - Euro</option>
      <option value="GBP">GBP - British Pound</option>
      <option value="HKD">HKD - Hong Kong Dollar</option>
      <option value="HRK">HRK - Croatian Kuna</option>
      <option value="HUF">HUF - Hungarian Forint</option>
      <option value="IDR">IDR - Indonesian Rupiah</option>
      <option value="ILS">ILS - Israeli New Sheqel</option>                  
      <option value="INR">INR - Indian Rupee</option>
      <option value="ISK">ISK - Icelandic Króna</option>
      <option value="JPY">JPY - Japanese Yen</option>
      <option value="KRW">KRW - South Korean Won</option>
      <option value="MXN">MXN - Mexican Peso</option>
      <option value="MYR">MYR - Malaysian Ringgit</option>
      <option value="NOK">NOK - Norwegian Krone</option>
      <option value="NZD">NZD - New Zealand Dollar</option>
      <option value="PHP">PHP - Philippine Peso</option>
      <option value="PLN">PLN - Polish Złoty</option>
      <option value="RON">RON - Romanian Leu</option>
      <option value="RUB">RUB - Russian Ruble</option>
      <option value="SEK">SEK - Swedish Krona</option>
      <option value="SGD">SGD - Singapore Dollar</option>
      <option value="THB">THB - Thai Baht</option>
      <option value="TRY">TRY - Turkish Lira</option>
      <option value="USD">USD - United States Dollar</option>
      <option value="ZAR">ZAR - South African Rand</option>
    </select>
  )}

export default Options;
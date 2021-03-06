import React from 'react';

// returns options dropdown with flags and full currency names

const Options = (props) => {

  // default converter GBP to JPY
  // default exchange base currency GBP

  return(
    <select className="form-select ps-xl-3" id={props.name} name={props.name} onChange={props.handleCurrencyChange} value={props.value} defaultValue={props.defaultVal}>              
      <option value="AUD">๐ฆ๐บ AUD - Australian Dollar</option>
      <option value="BGN">๐ง๐ฌ BGN - Bulgarian Lev</option>
      <option value="BRL">๐ง๐ท BRL - Brazilian Real</option>
      <option value="CAD">๐จ๐ฆ CAD - Canadian Dollar</option>
      <option value="CHF">๐จ๐ญ CHF - Swiss Franc</option>
      <option value="CNY">๐จ๐ณ CNY - Chinese Renminbi Yuan</option>
      <option value="CZK">๐จ๐ฟ CZK - Czech Koruna</option>
      <option value="DKK">๐ฉ๐ฐ DKK - Danish Krone</option>
      <option value="EUR">๐ช๐บ EUR - Euro</option>
      <option value="GBP">๐ฌ๐ง GBP - British Pound</option>
      <option value="HKD">๐ญ๐ฐ HKD - Hong Kong Dollar</option>
      <option value="HRK">๐ญ๐ท HRK - Croatian Kuna</option>
      <option value="HUF">๐ญ๐บ HUF - Hungarian Forint</option>
      <option value="IDR">๐ฎ๐ฉ IDR - Indonesian Rupiah</option>
      <option value="ILS">๐ฎ๐ฑ ILS - Israeli New Sheqel</option>                  
      <option value="INR">๐ฎ๐ณ INR - Indian Rupee</option>
      <option value="ISK">๐ฎ๐ธ ISK - Icelandic Krรณna</option>
      <option value="JPY">๐ฏ๐ต JPY - Japanese Yen</option>
      <option value="KRW">๐ฐ๐ท KRW - South Korean Won</option>
      <option value="MXN">๐ฒ๐ฝ MXN - Mexican Peso</option>
      <option value="MYR">๐ฒ๐พ MYR - Malaysian Ringgit</option>
      <option value="NOK">๐ณ๐ด NOK - Norwegian Krone</option>
      <option value="NZD">๐ณ๐ฟ NZD - New Zealand Dollar</option>
      <option value="PHP">๐ต๐ญ PHP - Philippine Peso</option>
      <option value="PLN">๐ต๐ฑ PLN - Polish Zลoty</option>
      <option value="RON">๐ท๐ด RON - Romanian Leu</option>
      <option value="RUB">๐ท๐บ RUB - Russian Ruble</option>
      <option value="SEK">๐ธ๐ช SEK - Swedish Krona</option>
      <option value="SGD">๐ธ๐ฌ SGD - Singapore Dollar</option>
      <option value="THB">๐น๐ญ THB - Thai Baht</option>
      <option value="TRY">๐น๐ท TRY - Turkish Lira</option>
      <option value="USD">๐บ๐ธ USD - United States Dollar</option>
      <option value="ZAR">๐ฟ๐ฆ ZAR - South African Rand</option>
    </select>
  )}

export default Options;
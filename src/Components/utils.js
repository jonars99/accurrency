
// functions for fetch

export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error('Request was either a 404 or 500');
}

export const json = (response) => response.json();

// functions to create list of currencies with flag, code and name for each one

const flags = [
  '🇦🇺', '🇧🇬', '🇧🇷', '🇨🇦', '🇨🇭', '🇨🇳', '🇨🇿', '🇩🇰', '🇪🇺', '🇬🇧', '🇭🇰', 
  '🇭🇷', '🇭🇺', '🇮🇩', '🇮🇱', '🇮🇳', '🇮🇸', '🇯🇵', '🇰🇷', '🇲🇽', '🇲🇾', '🇳🇴', 
  '🇳🇿', '🇵🇭', '🇵🇱', '🇷🇴', '🇷🇺', '🇸🇪', '🇸🇬', '🇹🇭', '🇹🇷', '🇺🇸', '🇿🇦' 
]

//fetch currency object with code and names
const fetchCurrencies = (callback) => {
  const currencyInfo = [];
  fetch('https://altexchangerateapi.herokuapp.com/currencies')
  .then(checkStatus)
  .then(json)
  .then((response) => {
    return callback(currencyInfo, flags, response); })
  .catch((error) => {
    console.log(error)
  })
  return currencyInfo;
}

//create array with information for each currency mapped from fetched data
const setCurrencyInfo = (arr, flagData, data) => {
  var i = 0;
  for (const currency in data) {
    arr.push({
      flag: flagData[i],
      code: currency,
      name: data[currency],
      value: ''
    })
    i++;
  }
  return arr;
}

export const info = fetchCurrencies(setCurrencyInfo);
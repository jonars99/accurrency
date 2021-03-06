// functions for fetch

export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error('Request was either a 404 or 500');
}

export const json = (response) => response.json();

// list of currencies with flag, code and name for each one

export const info = [
  {
    flag: '๐ฆ๐บ',
    code: 'AUD',
    currencyName: 'Australian Dollar'
  },
  {
    flag: '๐ง๐ฌ',
    code: 'BGN',
    currencyName: 'Bulgarian Lev'
  },
  {
    flag: '๐ง๐ท',
    code: 'BRL',
    currencyName: 'Brazilian Real'
  },
  {
    flag: '๐จ๐ฆ',
    code: 'CAD',
    currencyName: 'Canadian Dollar'
  },
  {
    flag: '๐จ๐ญ',
    code: 'CHF',
    currencyName: 'Swiss Franc'
  },
  {
    flag: '๐จ๐ณ',
    code: 'CNY',
    currencyName: 'Chinese Renminbi Yuan'
  },
  {
    flag: '๐จ๐ฟ',
    code: 'CZK',
    currencyName: 'Czech Koruna'
  },
  {
    flag: '๐ฉ๐ฐ ',
    code: 'DKK',
    currencyName: 'Danish Krone'
  },
  {
    flag: '๐ช๐บ',
    code: 'EUR',
    currencyName: 'Euro'
  },
  {
    flag: '๐ฌ๐ง ',
    code: 'GBP',
    currencyName: 'British Pound'
  },
  {
    flag: '๐ญ๐ฐ',
    code: 'HKD',
    currencyName: 'Hong Kong Dollar'
  },
  {
    flag: '๐ญ๐ท',
    code: 'HRK',
    currencyName: 'Croatian Kuna'
  },
  {
    flag: '๐ญ๐บ',
    code: 'HUF',
    currencyName: 'Hungarian Forint'
  },
  {
    flag: '๐ฎ๐ฉ',
    code: 'IDR',
    currencyName: 'Indonesian Rupiah'
  },
  {
    flag: '๐ฎ๐ฑ',
    code: 'ILS',
    currencyName: 'Israeli New Sheqel'
  },
  {
    flag: '๐ฎ๐ณ',
    code: 'INR',
    currencyName: 'Indian Rupee'
  },
  {
    flag: '๐ฎ๐ธ',
    code: 'ISK',
    currencyName: 'Icelandic Krรณna'
  },
  {
    flag: '๐ฏ๐ต',
    code: 'JPY',
    currencyName: 'Japanese Yen'
  },
  {
    flag: '๐ฐ๐ท',
    code: 'KRW ',
    currencyName: 'South Korean Won'
  },
  {
    flag: '๐ฒ๐ฝ' ,
    code: 'MXN',
    currencyName: 'Mexican Peso'
  },
  {
    flag: '๐ฒ๐พ',
    code: 'MYR',
    currencyName: 'Malaysian Ringgit'
  },
  {
    flag: '๐ณ๐ด',
    code: 'NOK',
    currencyName: 'Norwegian Krone'
  },
  {
    flag: '๐ณ๐ฟ',
    code: 'NZD',
    currencyName: 'New Zealand Dollar'
  },
  {
    flag: '๐ต๐ญ',
    code: 'PHP',
    currencyName: 'Philippine Peso'
  },
  {
    flag: '๐ต๐ฑ',
    code: 'PLN',
    currencyName: 'Polish Zลoty'
  },
  {
    flag: '๐ท๐ด',
    code: 'RON',
    currencyName: 'Romanian Leu'
  },
  {
    flag: '๐ท๐บ',
    code: 'RUB',
    currencyName: 'Russian Ruble'
  },
  {
    flag: '๐ธ๐ช',
    code: 'SEK',
    currencyName: 'Swedish Krona'
  },
  {
    flag: '๐ธ๐ฌ',
    code: 'SGD',
    currencyName: 'Singapore Dollar'
  },
  {
    flag: '๐น๐ญ',
    code: 'THB',
    currencyName: 'Thai Baht'
  },
  {
    flag: '๐น๐ท',
    code: 'TRY',
    currencyName: 'Turkish Lira'
  },
  {
    flag: '๐บ๐ธ',
    code: 'USD',
    currencyName: 'United States Dollar'
  },
  {
    flag: '๐ฟ๐ฆ',
    code: 'ZAR',
    currencyName: 'South African Rand'
  },
]
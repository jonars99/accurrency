import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { checkStatus, json } from './utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title
)

const ConverterChart = ( {currencyInput, currencyOutput} ) => {

  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);

  const getHistoricalRates = (baseCurrency, quoteCurrency) => {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date((new Date).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];

    if (currencyInput !== currencyOutput) {
      fetch(`https://altexchangerateapi.herokuapp.com/${startDate}..${endDate}?from=${baseCurrency}&to=${quoteCurrency}`)
      .then(checkStatus)
      .then(json)
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        setChartLabels(Object.keys(data.rates));
        setChartData(Object.values(data.rates).map(rate => rate[currencyOutput]));
      })
    }

  }

  const data = {
    labels: chartLabels,
    datasets: [{
      label: 'Currency Rates in the last 30 days',
      data: chartData,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    },
    plugins: {
      title: {
        display: true,
        text: currencyInput + '/' + currencyOutput,
      }
    }
  };

  useEffect(() => {
    getHistoricalRates(currencyInput, currencyOutput);
  }, [currencyInput, currencyOutput]);

  return (
    <div>
      <Line
      data={data}
      options={options} />
    </div>
  )

}

export default ConverterChart;
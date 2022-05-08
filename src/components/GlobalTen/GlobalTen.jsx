import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import cryptosService from '../../services/cryptos.service'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)


const GlobalTen = () => {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }
    ]
  })

  const [chartOptions, setChartOptions] = useState({
    legend: {
      display: true,
      position: 'top',
      labels: {
        fontColor: '#000'
      }
    }
  })

  useEffect(() => {
    cryptosService
      .getCryptos()
      .then(response => {
        const tenFirstCryptos = response.data.data.sort((a, b) => {
          return b.marketCapUsd - a.marketCapUsd
        }).slice(0, 10)
        const cryptos = tenFirstCryptos
        const labels = cryptos.map(crypto => crypto.name)
        const data = cryptos.map(crypto => crypto.marketCapUsd)
        const backgroundColor = ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)']
        const borderColor = ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)']

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'MARKET CAP (USD)',
              data: data,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1
            }
          ]
        })
        setChartOptions({
          responsive: true,   
          legend: {
            display: true,
            position: 'top',
            labels: {
              fontColor: '#fff'
            },
          }
        })
      })
  }, [])

  return (
    <Bar data={chartData} options={chartOptions}  />
  )
}

export default GlobalTen
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import cryptosService from '../../services/cryptos.service'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


const TerraUSDChart = () => {


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
      .getCryptosHistory('terrausd')
      .then(response => {
        const labels = response.data.data.map(item => item.date.slice(0, 10))
        const data = response.data.data.map(item => item.priceUsd)
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Terra',
              data: data,
              backgroundColor: [  'rgba(205, 58, 129, 1)' ],
              borderColor: [  'rgba(205, 58, 129, 0.4)' ],
              borderWidth: 1
            }
          ]
        })
        setChartOptions({
          legend: {
            display: true,
            position: 'top',
            labels: {
              fontColor: '#000'
            }
          }
        })
      }
      )
  }, [])




  return (
    <Line options={chartOptions} data={chartData} />
  )
}

export default TerraUSDChart
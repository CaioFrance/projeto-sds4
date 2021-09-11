import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale'
import { BASE_URL } from 'utils/requests'

type ChartData = {
  series: number[]
  labels: string[]
}

export function DonautChar() {

  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      .then(res => {
        const data = res.data as SaleSum[];
        const myLabels = data.map(x => x.sallerName)
        const mySeries = data.map(x => x.sum)
    
        setChartData({ labels: myLabels, series: mySeries })
      })
  }, [])

  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  // }

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart
      type='donut'
      height="240"
      series={chartData.series}
      options={{ ...options, labels: chartData.labels }} />
  )
}
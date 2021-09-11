import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';
import { Z_ASCII } from 'zlib';

type SeriesData = {
  name: string
  data: number[]
}

type ChartData = {
  labels: {
    categories: string[]
  },
  series: SeriesData[]
}

export function BarChar() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        data: [],
        name: ''
      }
    ]
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`)
      .then(res => {
        const data = res.data as SaleSuccess[]
        const myLabels = data.map(x => x.sallerName)
        const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1))

        setChartData({labels: {
          categories: myLabels
        }, series: [
          {
            data: mySeries,
            name: '% Success'
          }
        ]})
      })
  }, [])

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };
  
  return (
    <Chart
      type='bar'
      height="240"
      series={chartData.series}  
      options={{...options, xaxis:chartData.labels }} />
  )
}
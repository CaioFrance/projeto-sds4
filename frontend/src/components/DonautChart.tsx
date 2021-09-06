import Chart from 'react-apexcharts'

export function DonautChar() {
  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  }

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart
      type='donut'
      height="240"
      series={mockData.series}
      options={{ ...options, labels: mockData.labels }} />
  )
}
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}


type Props = {
  data : any[]
}

function ramdonRGB() : number {
  return Math.round (Math.random () * 255) 
}

export default function PopulationGraph({data} : Props) {
  const [first] = data
  const datasets = data.map(p => ({
    label : p.prefName,
    data : p.data.map(({value}) => value),
    borderColor: `rgb(${ramdonRGB()},${ramdonRGB()},${ramdonRGB()})`,
    backgroundColor: `rgba(${ramdonRGB()},${ramdonRGB()},${ramdonRGB()},0.5)`,
  }))

  const d = {
    labels : first?.data?.map(({year}) => year),
    datasets
  };

  return <Line options={options} data={d} />;
}

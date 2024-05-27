"use client"

import React, { FC, useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { chartDataDefault, chartOptionsDefault } from "@/lib/defaultData"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type BarChartProps = {
  title: string
  data: number[]
}

export const BarChart: FC<BarChartProps> = ({ title, data }) => {
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    labels: [],
    datasets: [],
  })
  const [chartOprions, setChartOprions] = useState<ChartOptions<"bar">>({})

  chartOptionsDefault.plugins!.title!.text! = title
  chartDataDefault.datasets[0].data = data

  useEffect(() => {
    setChartData(chartDataDefault)
    setChartOprions(chartOptionsDefault)
  }, [])

  return (
    <>
      <div className="w-full relative lg:h-[65vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOprions} />
      </div>
    </>
  )
}

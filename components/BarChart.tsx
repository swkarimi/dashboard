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

  console.log("chartOprions", chartOprions)

  useEffect(() => {
    chartOptionsDefault.plugins!.title!.text! = title
    chartDataDefault.datasets[0].data = data

    setChartData(chartDataDefault)
    setChartOprions(chartOptionsDefault)
  }, [data, title])

  return (
    <div className="w-full h-[calc(50vh-72px)] lg:h-[calc(65vh-72px)] ">
      <Bar key={Math.random()} data={chartData} options={chartOprions} />
    </div>
  )
}

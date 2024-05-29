import { ChartData, ChartOptions } from "chart.js"

export const chartDataDefault: ChartData<"bar"> = {
  labels: [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ],
  datasets: [
    {
      label: "فروش",
      data: [],
      borderColor: "rgb(53,162,235)",
      backgroundColor: "rgb(53,162,235,0.4)",
    },
  ],
}

export const chartOptionsDefault: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          family: "sahel",
        },
      },
    },
    title: {
      display: true,
      text: "",
    },
  },
  scales: {
    x: {
      reverse: true,
      ticks: {
        font: {
          size: 12,
          family: "sahel",
        },
      },
    },
    y: {
      position: "right",
      ticks: {
        font: {
          size: 12,
          family: "sahel",
        },
      },
    },
  },
}

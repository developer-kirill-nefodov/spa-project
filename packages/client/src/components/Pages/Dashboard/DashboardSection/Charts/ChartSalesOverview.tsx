import React, {useEffect, useRef, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';

import {Chart} from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  tension: 0.4,
  pointBorderColor: 'transparent',
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      }
    },
    y: {
      max: 500,
      min: 0,
      ticks: {
        stepSize: 100
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    }
  }
};

const data = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Mobile apps",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      borderColor: "#db3ab3",
    },
    {
      label: "Website",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
      borderColor: "#4b3c75",
      fill: true,
      fillBetweenSet: 1,
      fillBetweenColor: "rgba(5,5,255, 0.2)"
    }
  ]
};


const ChartSalesOverview = () => {
  return (
    <Chart
      type='line'
      data={data}
      options={options}
    />
  );
};

export default ChartSalesOverview;

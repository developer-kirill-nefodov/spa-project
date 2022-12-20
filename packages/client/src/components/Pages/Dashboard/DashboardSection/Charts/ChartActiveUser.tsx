import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  BarElement
} from 'chart.js';

import {Chart} from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,

  aspectRatio: 2,
  backgroundColor: '#fff',
  borderSkipped: false,
  barPercentage: 0.3,
  borderRadius: 50,
  scales: {
    x: {
      max: 12,
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false
      }
    },
    y: {
      max: 500,
      min: 0,
      ticks: {
        color: '#fff',
        stepSize: 250
      }
    }
  },
  color: '#fff',
  plugins: {
    legend: {
      display: false,
    }
  }
};

const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
    },
  ],
};

const plugins = [
  {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart: any) => {
      const {ctx} = chart;
      ctx.save();
      ctx.fillStyle = '#272c4b';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  }
]

const ChartActiveUser = () => {
  return (
    <Chart
      type='bar'
      data={data}
      options={options}
      plugins={plugins}
    />
  );
}

export default ChartActiveUser;

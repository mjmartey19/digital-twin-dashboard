import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface LineChartProps {
  data: number[];
  labels: string[];
  dataSetLabel: string;
}

const LineChart: React.FC<LineChartProps> = ({ data, labels, dataSetLabel }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: dataSetLabel,
        data: data,
        fill: false,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: dataSetLabel,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: number[];
  labels: string[];
  dataSetLabel: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, labels, dataSetLabel }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: dataSetLabel,
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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

  return <Bar data={chartData} options={options} />;
};

export default BarChart;

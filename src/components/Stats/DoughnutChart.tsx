import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        usePointStyle: true,
        generateLabels: (chart) => {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => ({
              text: `${label}: ${(
                (data.datasets[0].data[i] /
                  data.datasets[0].data.reduce((a, b) => a + b)) *
                100
              ).toFixed(0)}%`,
              fillStyle: data.datasets[0].backgroundColor[i],
            }));
          }
          return [];
        },
      },
    },
  },
};

export const data = {
  labels: ['Win', 'Loss', 'Draw'],
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(75, 192, 128, 0.6)', // Green for Win
        'rgba(255, 99, 132, 0.6)', // Red for Loss
        'rgba(255, 206, 86, 0.6)', // Yellow for Draw
      ],
      borderColor: [
        'rgba(75, 192, 128, 1)', // Corresponding border color for Win
        'rgba(255, 99, 132, 1)', // Corresponding border color for Loss
        'rgba(255, 206, 86, 1)', // Corresponding border color for Draw
      ],
      borderWidth: 2,
    },
  ],
};

function DoughnutChart() {
  return (
    <div className="Doughnut_container">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;

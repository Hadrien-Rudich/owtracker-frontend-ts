import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { gameStore } from '../../store/gameStore';
import {
  filterGamesByResult,
  generateTextCenterCallback,
} from '../../utils/chartsUtils';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom',

      labels: {
        font: {
          size: 15,
          family: 'Big Noodle Titling',
        },
        usePointStyle: false,
        pointStyle: 'rectRot',
        boxWidth: 20,
        generateLabels: (chart) => {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => ({
              text: label, // Return only the label name
              fillStyle: data.datasets[0].backgroundColor[i],
            }));
          }
          return [];
        },
      },
    },
    title: {
      display: true,
      text: 'Game Results',
      font: {
        size: 20,
        family: 'Big Noodle Titling',
      },
      color: '#000080',
    },
  },
  // ...
};

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw: generateTextCenterCallback,
};

const textInsideDoughnut = {
  id: 'textInsideDoughnut',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    const { data } = chart.data.datasets[0];
    const segments = chart.getDatasetMeta(0).data;
    const total = data.reduce((acc, value) => acc + value, 0);

    ctx.font = '20px Big Noodle Titling';
    ctx.fillStyle = '#000080'; // Navy Blue
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    segments.forEach((segment, index) => {
      const model = segment.getCenterPoint();
      const segmentValue = data[index];
      const percentage = ((segmentValue / total) * 100).toFixed(0);
      ctx.fillText(`${percentage}%`, model.x, model.y); // Add a percentage sign (%) to the label
    });
  },
};

// ...

function DoughnutChart() {
  const { gamesData } = gameStore();
  const results = filterGamesByResult(gamesData);

  const data = {
    labels: ['Win', 'Loss', 'Draw'],
    datasets: [
      {
        data: results,
        // borderColor: [
        //   'rgba(75, 192, 128, 0.6)', // Green for Win
        //   'rgba(255, 99, 132, 0.6)', // Red for Loss
        //   'rgba(255, 206, 86, 0.6)', // Yellow for Draw
        // ],
        // backgroundColor: [
        //   'rgba(160, 230, 169, 1)', // Corresponding border color for Win
        //   'rgba(242, 162, 179, 1)', // Corresponding border color for Loss
        //   'rgba(242, 229, 162, 1)', // Corresponding border color for Draw
        // ],
        backgroundColor: [
          'rgba(75, 192, 128, 0.8)', // Green for Win
          'rgba(255, 99, 132,0.8)', // Red for Loss
          'rgba(255, 206, 86,0.8)', // Yellow for Draw
        ],
        hoverBackgroundColor: [
          'rgba(75, 192, 128, 1)', // Green for Win (hovered)
          'rgba(255, 99, 132, 1)', // Red for Loss (hovered)
          'rgba(255, 206, 86, 1)', // Yellow for Draw (hovered)
        ],
        hoverBorderColor: ['none'],
        hoverBorderWidth: 0,
        hoverOffset: 5,
        borderWidth: 1,
      },
    ],
  };
  const chartStyles = {
    // Define your custom styles here
    letterSpacing: '1.5px', // Adjust the letter-spacing as needed
    font: 'Big Noodle Titling',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#000080', // Navy Blue
    textAlign: 'center',
  };
  return (
    <div className="Doughnut_container" style={chartStyles}>
      <Doughnut
        data={data}
        options={options}
        plugins={[textInsideDoughnut, textCenter]}
      />
    </div>
  );
}

export default DoughnutChart;

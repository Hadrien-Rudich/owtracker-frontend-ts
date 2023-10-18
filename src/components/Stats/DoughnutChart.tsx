import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { gameStore } from '../../store/gameStore';
import { filterGamesByResult } from '../../utils/utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
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
  },
  // ...
};

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = '15px sans-serif';
    ctx.fillStyle = '#000080'; // Navy Blue
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      `${
        data.datasets[0].data[0] +
        data.datasets[0].data[1] +
        data.datasets[0].data[2]
      } Games`,
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

const textInsideDoughnut = {
  id: 'textInsideDoughnut',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    const { data } = chart.data.datasets[0];
    const segments = chart.getDatasetMeta(0).data;
    const total = data.reduce((acc, value) => acc + value, 0);

    ctx.font = '15px sans-serif';
    ctx.fillStyle = '#000080'; // Navy Blue
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    segments.forEach((segment, index) => {
      const model = segment.getCenterPoint();
      const segmentValue = data[index];
      const percentage = ((segmentValue / total) * 100).toFixed(0);
      ctx.fillText(`${percentage}%`, model.x, model.y);
    });
  },
};

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
        hoverOffset: 20,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="Doughnut_container">
      <Doughnut
        data={data}
        options={options}
        plugins={[textInsideDoughnut, textCenter]}
      />
    </div>
  );
}

export default DoughnutChart;

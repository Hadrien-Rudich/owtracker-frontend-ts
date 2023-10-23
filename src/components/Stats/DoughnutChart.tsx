import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { gameStore } from '../../store/gameStore';
import {
  filterGamesByResult,
  generateTextCenterCallback,
  getBackgroundColor,
} from '../../utils/chartsUtils';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
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
        boxWidth: 20,
        generateLabels: ({ data }: { data: ChartData }) => {
          const { labels, datasets } = data;
          if (labels && labels.length && datasets.length) {
            return labels.map((label, i) => ({
              text: label, // Return only the label name
              fillStyle: getBackgroundColor(i),
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
};

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw: (chart: ChartJS<'doughnut', number[], unknown>) => {
    generateTextCenterCallback(chart);
  },
};

const textInsideDoughnut = {
  id: 'textInsideDoughnut',
  afterDatasetsDraw(chart: { data?: any; getDatasetMeta?: any; ctx?: any }) {
    const { ctx } = chart;
    const { data } = chart.data.datasets[0];
    const segments = chart.getDatasetMeta(0).data;
    const total = data.reduce((acc: any, value: any) => acc + value, 0);

    ctx.font = '20px Big Noodle Titling';
    ctx.fillStyle = '#000080'; // Navy Blue
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    segments.forEach(
      (segment: { getCenterPoint: () => any }, index: string | number) => {
        const model = segment.getCenterPoint();
        const segmentValue = data[index];
        const percentage = ((segmentValue / total) * 100).toFixed(0);
        ctx.fillText(`${percentage}%`, model.x, model.y); // Add a percentage sign (%) to the label
      }
    );
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
  const chartStyles: React.CSSProperties = {
    letterSpacing: '1.5px',
    font: 'Big Noodle Titling',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#000080',
    textAlign: 'center',
  };
  return (
    <div className="Doughnut_container" style={chartStyles}>
      <Doughnut
        data={data}
        options={chartOptions}
        plugins={[textInsideDoughnut, textCenter]}
      />
    </div>
  );
}

export default DoughnutChart;

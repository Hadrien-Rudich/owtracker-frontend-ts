/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  getBackgroundColor,
  chartStyles,
} from '../../utils/chartsUtils';

import {
  generateTextInsideDouhgnutHole,
  generateTextInsideDoughnutSegments,
  generateToolTipLabel,
} from '../../utils/doughnutUtils';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return null;
        },
        afterTitle() {
          return null;
        },

        label: generateToolTipLabel,
      },
    },
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

const textInsideDoughnutHole = {
  id: 'textInsideDoughnutHole',
  beforeDatasetsDraw: (chart: ChartJS<'doughnut', number[], unknown>) => {
    generateTextInsideDouhgnutHole(chart);
  },
};

const textInsideDoughnutSegments = {
  id: 'textInsideDoughnutSegments',
  afterDatasetsDraw: (chart: ChartJS<'doughnut', number[], unknown>) => {
    generateTextInsideDoughnutSegments(chart);
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
        backgroundColor: [
          'rgba(75, 192, 128, 0.8)',
          'rgba(255, 99, 132,0.8)',
          'rgba(255, 206, 86,0.8)',
        ],
        hoverBackgroundColor: [
          'rgba(75, 192, 128, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        hoverBorderColor: ['none'],
        hoverBorderWidth: 0,
        hoverOffset: 5,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="Doughnut_container" style={chartStyles}>
      <Doughnut
        data={data}
        height={300}
        // @ts-ignore
        options={chartOptions}
        // @ts-ignore
        plugins={[textInsideDoughnutSegments, textInsideDoughnutHole]}
      />
    </div>
  );
}

export default DoughnutChart;

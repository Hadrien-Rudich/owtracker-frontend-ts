/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartjsPluginStacked100 from 'chartjs-plugin-stacked100';
import { Bar } from 'react-chartjs-2';
import { gameStore } from '../../store/gameStore';
import {
  getHeroesByWinRatio,
  getColorForWinPercentage,
  chartStyles,
} from '../../utils/chartsUtils';
import {
  generateLeftHandSideHeroImg,
  generateRightHandSideTotalGamesText,
  generateToolTipLabel,
} from '../../utils/horizontalBarUtils';

ChartJS.register(
  ChartjsPluginStacked100,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const leftHandSideHeroImg = {
  id: 'leftHandSideHeroImg',
  beforeDatasetsDraw(chart: {
    ctx: any;
    data: any;
    options: any;
    scales: { x: any; y: any };
  }) {
    generateLeftHandSideHeroImg(chart);
  },
};

const rightHandSideTotalGamesText = {
  id: 'rightHandSideTotalGamesText',
  beforeDatasetsDraw(chart: {
    ctx: any;
    data: any;
    options: any;
    scales: { x: any; y: any };
  }) {
    generateRightHandSideTotalGamesText(chart);
  },
};

const options = {
  // maintainAspectRatio: true,
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  layout: {
    padding: {
      left: 35,
      right: 30,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Top 5 Heroes',
      font: {
        size: 20,
        family: 'Big Noodle Titling',
      },
      color: '#000080',
    },
    stacked100: {
      enable: true,
      replaceTooltipLabel: false,
    },
    tooltip: {
      callbacks: {
        title(context: { label: string }[]) {
          return `${context[0].label.toUpperCase()} stats`;
        },
        afterTitle() {
          return '------------------------';
        },
        label: generateToolTipLabel,
      },
    },
  },

  scales: {
    x: {
      display: false,
      min: 0,
      max: 100,
      grace: 5,
    },
    y: {
      display: false,
      min: 0,
      max: 100,
      grace: 5,
    },
  },
};

function HorizontalBarChart() {
  const { gamesData } = gameStore();

  const topHeroes = getHeroesByWinRatio(gamesData, 5); // Request the top 5 heroes
  const labels = topHeroes.map((hero) => hero.hero);

  // Calculate the data as fractions (win ratio)
  const data = topHeroes.map((hero) => {
    const winFraction = hero.wins / hero.gamesPlayed;
    const gamesFraction = 1 - winFraction;
    return [winFraction, gamesFraction];
  });

  const datasets = [
    {
      label: 'Wins',
      data: data.map((fractions) => fractions[0]), // Win fractions
      backgroundColor: topHeroes.map((hero) =>
        getColorForWinPercentage(hero.winRatio)
      ),
      hoverBorderColor: 'none',
      hoverBorderWidth: 0,
      hoverOffset: 5,
      borderWidth: 1,
      barThickness: 30, // Set the bar width
      image: topHeroes.map((hero) => `/images/heroes/${hero.hero}.png`),
      // Configure data labels for this dataset
      datalabels: {
        display: true,
        color: '#000080',
        font: {
          size: 20,
          family: 'Big Noodle Titling',
        },
        anchor: 'center',
        align: 'center', // Change the align property to 'center'
        formatter: (value: any) => `${(value * 100).toFixed(0)}%`,
      },
    },
    {
      label: 'Total Games',
      data: data.map((fractions) => fractions[1]), // Games fractions
      backgroundColor: 'light gray',
      hoverBorderColor: 'none',
      hoverBackgroundColor: 'white',
      hoverBorderWidth: 0,
      hoverOffset: 5,
      borderWidth: 1,
      barThickness: 30, // Set the bar width
      rightText: topHeroes.map((hero) => hero.gamesPlayed),
      datalabels: {
        display: false, // Hide data labels for this dataset
      },
    },
  ];

  return (
    <div style={chartStyles}>
      <Bar
        // @ts-ignore
        options={options}
        plugins={[
          ChartDataLabels,
          // @ts-ignore
          leftHandSideHeroImg,
          // @ts-ignore
          rightHandSideTotalGamesText,
        ]}
        height={300}
        data={{
          labels,
          // @ts-ignore
          datasets,
        }}
      />
    </div>
  );
}

export default HorizontalBarChart;

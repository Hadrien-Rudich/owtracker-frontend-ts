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
import { Bar } from 'react-chartjs-2';
import { gameStore } from '../../store/gameStore';
import {
  getHeroesByWinRatio,
  getColorForWinPercentage,
  generateTextCenterCallback,
} from '../../utils/chartsUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    datalabels: {
      color: '#000080',
      font: {
        size: 20,
        family: 'Big Noodle Titling',
      },
      anchor: 'center',
      align: 'center',
      formatter: (value, context) => {
        // Display the win percentage in the middle of the bar
        return context.dataset.data[context.dataIndex] + '%';
      },
    },
    legend: {
      position: 'left' as const,
      display: false,
    },
    title: {
      display: true,
      text: 'Top 5 Heroes',
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

const chartStyles = {
  letterSpacing: '1px',
  font: 'Big Noodle Titling',
  fontSize: '10px',
  fontWeight: 'bold',
  color: '#000080',
  textAlign: 'center',
};

function HorizontalBarChart() {
  const { gamesData } = gameStore();

  // Use the updated getHeroesByWinRatio function
  const topFiveHeroes = getHeroesByWinRatio(gamesData, 5);

  // Extract labels and datasets from the topFiveHeroes data
  const labels = topFiveHeroes.map((hero) => hero.hero);
  const datasets = [
    {
      label: 'Wins',
      data: topFiveHeroes.map((hero) => hero.winRatio),
      backgroundColor: topFiveHeroes.map((hero) =>
        getColorForWinPercentage(hero.winRatio)
      ),
      hoverBorderColor: topFiveHeroes.map((_) => 'none'),
      hoverBorderWidth: topFiveHeroes.map((_) => 0),
      hoverOffset: topFiveHeroes.map((_) => 5),
      borderWidth: topFiveHeroes.map((_) => 1),
    },
  ];

  const data = {
    labels,
    datasets,
  };

  // const textCenter = {
  //   id: 'textCenter',
  //   beforeDatasetsDraw: generateTextCenterCallback,
  // };

  return (
    <div style={chartStyles}>
      <Bar
        plugins={[
          ChartDataLabels,
          //  textCenter
        ]}
        options={options}
        data={data}
      />
    </div>
  );
}

export default HorizontalBarChart;

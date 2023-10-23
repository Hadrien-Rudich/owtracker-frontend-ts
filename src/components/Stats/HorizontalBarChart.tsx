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
} from '../../utils/chartsUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const imageItems = {
  id: 'imageItems',
  beforeDatasetsDraw(
    chart: { ctx: any; data: any; options: any; scales: { x: any; y: any } },
    args: any,
    pluginOptions: any
  ) {
    const {
      ctx,
      data,
      options,
      scales: { x, y },
    } = chart;
    const imageSize = options.layout.padding.left;
    ctx.save();

    data.datasets[0].image.forEach((imageLink: string, index: any) => {
      const logo = new Image();
      logo.src = imageLink;
      ctx.drawImage(
        logo,
        0,
        y.getPixelForValue(index) - imageSize / 2,
        imageSize,
        imageSize
      );
    });
  },
};

const options = {
  maintainAspectRatio: false,
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  layout: {
    padding: {
      left: 30,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
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
    datalabels: {
      color: '#000080',
      font: {
        size: 15,
        family: 'Big Noodle Titling',
      },
      anchor: 'center',
      align: 'right',
      formatter: (
        value: any,
        context: {
          dataset: { data: { [x: string]: string } };
          dataIndex: string | number;
        }
      ) => {
        // Display the win percentage in the middle of the bar
        return `${context.dataset.data[context.dataIndex]}%`;
      },
    },
  },
  scales: {
    x: {
      display: false,
      min: 0,
      max: 100,
    },
    y: {
      display: false,
    },
  },
};

const chartStyles: React.CSSProperties = {
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

      hoverBorderColor: 'none',
      hoverBorderWidth: 0,
      hoverOffset: 5,
      borderWidth: 1,
      image: [
        `/images/heroes/${topFiveHeroes[0].hero}.png`,
        `/images/heroes/${topFiveHeroes[1].hero}.png`,
        `/images/heroes/${topFiveHeroes[2].hero}.png`,
        `/images/heroes/${topFiveHeroes[3].hero}.png`,
        `/images/heroes/${topFiveHeroes[4].hero}.png`,
      ],
    },
  ];

  const data = {
    labels,
    datasets,
  };

  return (
    <div style={chartStyles}>
      <Bar
        options={options}
        plugins={[ChartDataLabels, imageItems]}
        height={250}
        data={data}
      />
    </div>
  );
}

export default HorizontalBarChart;

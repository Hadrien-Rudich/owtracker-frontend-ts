/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Chart as ChartJS } from 'chart.js';

function generateTextInsideDouhgnutHole(chart: ChartJS<'doughnut'>) {
  const { ctx, data } = chart;
  ctx.save();
  ctx.font = '20px Big Noodle Titling';
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
}

function generateLeftHandSideHeroImg(chart: {
  ctx: any;
  data: any;
  options: any;
  scales: { x: any; y: any };
}) {
  const {
    ctx,
    data,
    options,
    scales: { y },
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
}

function generateRightHandSideTotalGamesText(chart: {
  ctx: any;
  data: any;
  options: any;
  scales: { x: any; y: any };
}) {
  const {
    ctx,
    data,
    options,
    scales: { x, y },
  } = chart;
  const rightPadding = 225;
  const textSize = options.layout.padding.right;
  ctx.save();

  data.datasets[1].rightText.forEach((numberOfGames: number, index: any) => {
    // Determine the position for the text
    const xPosition = x.getPixelForValue(0) + textSize + rightPadding;
    const yPosition = y.getPixelForValue(index);

    // Set the font properties
    ctx.font = '20px Big Noodle Titling';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000080';

    // Display the number of games
    ctx.fillText(numberOfGames, xPosition, yPosition);
  });
}

function generateTextInsideDoughnutSegments(chart: ChartJS<'doughnut'>) {
  const { ctx } = chart;
  const { data } = chart.data.datasets[0];
  const segments = chart.getDatasetMeta(0).data;
  const total = data.reduce((acc: number, value: number) => acc + value, 0);

  ctx.font = '20px Big Noodle Titling';
  ctx.fillStyle = '#000080'; // Navy Blue
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // @ts-ignore
  segments.forEach((segment: Chart.ArcElement, index: number) => {
    const model = segment.getCenterPoint();
    const segmentValue = data[index];
    const percentage = ((segmentValue / total) * 100).toFixed(0);
    ctx.fillText(`${percentage}%`, model.x, model.y); // Display the percentage
  });
}

export {
  generateTextInsideDouhgnutHole,
  generateTextInsideDoughnutSegments,
  generateLeftHandSideHeroImg,
  generateRightHandSideTotalGamesText,
};

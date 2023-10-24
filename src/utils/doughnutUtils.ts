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

export { generateTextInsideDouhgnutHole, generateTextInsideDoughnutSegments };

import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';

function Stats() {
  return (
    <div className="bg-mainColor mt-24 container mx-auto flexdiv gap-24">
      <LineChart />
      <DoughnutChart />
    </div>
  );
}

export default Stats;

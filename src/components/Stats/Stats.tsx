import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import HorizontalBarChart from './HorizontalBarChart';

function Stats() {
  return (
    <div className="flexdiv w-full">
      <div className="my-6 bg-mainColor w-3/4 flexdiv">
        <div className="bg-mainColor mt-24 container mx-auto flexdiv gap-24">
          <LineChart />
        </div>
        <div className="bg-mainColor mt-24 container mx-auto flexdiv gap-24">
          <DoughnutChart />
        </div>
        <div className="bg-mainColor mt-24 container mx-auto flexdiv gap-24">
          <HorizontalBarChart />
        </div>
      </div>
    </div>
  );
}

export default Stats;

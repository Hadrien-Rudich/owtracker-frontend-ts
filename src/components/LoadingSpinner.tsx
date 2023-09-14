import { ProgressBar } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <div className="flexdiv">
      <ProgressBar
        height="300"
        width="300"
        borderColor="#ffffff"
        barColor="#51E5FF"
      />
    </div>
  );
}

export default LoadingSpinner;

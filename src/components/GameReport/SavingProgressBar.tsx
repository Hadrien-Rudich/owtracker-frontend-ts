import { useEffect } from 'react';

function SavingProgressBar() {
  useEffect(() => {
    const progressBar = document.querySelector('.progressBar') as HTMLElement;

    const intervalId = setInterval(() => {
      if (progressBar) {
        const computedStyle = getComputedStyle(progressBar);
        const width =
          parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        progressBar.style.setProperty('--width', (width + 0.6).toString());
      }
    }, 2);

    return () => clearInterval(intervalId);
  }, []); // Run the effect only once after initial render

  return <div className="progressBar" data-label="Saving..." />;
}

export default SavingProgressBar;

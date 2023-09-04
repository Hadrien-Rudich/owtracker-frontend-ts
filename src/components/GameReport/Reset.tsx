import { gameReportStore } from '../../store/gameReportStore';

function Reset() {
  const { clearMapType, clearMap, clearHeroes, clearResult, clearRole } =
    gameReportStore();

  const resetSelection = () => {
    clearMapType();
    clearMap();
    clearHeroes();
    clearResult();
    clearRole();
  };

  const handleClick = () => {
    resetSelection();
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="button cancel">
        Reset
      </button>
    </div>
  );
}

export default Reset;

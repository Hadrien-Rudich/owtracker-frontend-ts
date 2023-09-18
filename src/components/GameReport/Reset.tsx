import { gameReportStore } from '../../store/gameReportStore';

function Reset() {
  const {
    unselectMapType,
    unselectMap,
    unselectHeroes,
    unselectResult,
    unselectRole,
  } = gameReportStore();

  const resetSelection = () => {
    unselectMapType();
    unselectMap();
    unselectHeroes();
    unselectResult();
    unselectRole();
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

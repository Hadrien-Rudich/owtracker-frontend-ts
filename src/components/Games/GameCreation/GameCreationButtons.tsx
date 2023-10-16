import CancelGameCreation from './CancelGameCreation';
import { gameStore } from '../../../store/gameStore';

function GameCreationButtons() {
  const { isCreatingGame } = gameStore();

  return (
    <div className="GameButtons_container absolute right-4">
      <div className="xl:gap-3 lg:gap-1 gap-4 flexdiv  ">
        {isCreatingGame && <CancelGameCreation />}
      </div>
    </div>
  );
}

export default GameCreationButtons;

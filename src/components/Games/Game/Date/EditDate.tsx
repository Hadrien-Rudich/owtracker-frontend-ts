import { gameStore } from '../../../../store/gameStore';
import Date from './Date';
import type { GameData } from '../../../../types/store/gameTypes';

function EditDate({ gameObj }: { gameObj: GameData }) {
  const { selectedGame } = gameStore();

  return (
    <div className="Date_container">
      {selectedGame.id === gameObj.id ? (
        <div>
          <div className="flex gap-12">
            <select name="date" id="date-select">
              <option value="21/09">21/09</option>
              <option value="22/09">22/09</option>
              <option value="23/09">23/09</option>
            </select>
          </div>
        </div>
      ) : (
        <Date gameObj={gameObj} />
      )}
    </div>
  );
}

export default EditDate;

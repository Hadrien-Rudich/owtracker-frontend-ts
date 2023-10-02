import { RiEditFill } from 'react-icons/ri';
import { gameStore } from '../../../store/gameStore';
import type { GameData } from '../../../types/store/gameTypes';

function EditGame({ gameObj }: { gameObj: GameData }) {
  const {
    setIsUpdatingGame,
    isUpdatingGame,
    selectGameResult,
    selectedGameMap,
    selectGameDateInFormat,
    selectGameMap,
  } = gameStore();

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setIsUpdatingGame(true);
    selectGameResult(gameObj.result);
    selectGameDateInFormat(gameObj.date);
    selectGameMap(gameObj.map, gameObj.mapImageUrl);
    console.log(selectedGameMap);
  };

  return (
    <div className="flex">
      {!isUpdatingGame && (
        <button
          type="button"
          value={gameObj.id}
          onClick={handleEdit}
          className="hover:scale-125"
        >
          <RiEditFill className="sign lg:h-[1.35rem] lg:w-[1.35rem] h-[1.55rem] w-[1.55rem]" />
        </button>
      )}
    </div>
  );
}

export default EditGame;

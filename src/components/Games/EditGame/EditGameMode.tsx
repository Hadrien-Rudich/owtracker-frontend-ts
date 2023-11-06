import { RiEditFill } from 'react-icons/ri';
import { gameStore } from '../../../store/gameStore';
import type { GameData } from '../../../types/store/gameTypes';

function EditGameMode({ gameObj }: { gameObj: GameData }) {
  const {
    selectGame,
    setIsUpdatingGame,
    selectGameResult,
    selectGameHeroes,
    selectGameMap,
    selectGameDateInFormat,
    isUpdatingGame,
  } = gameStore();

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    selectGame(gameObj);
    selectGameResult(gameObj.result);
    selectGameDateInFormat(gameObj.date);
    selectGameMap(gameObj.map, gameObj.mapImageUrl);
    selectGameHeroes(gameObj.heroes, gameObj.heroesImageUrl);
    setIsUpdatingGame(true);
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
          <RiEditFill className="sign  lg:h-[1.55rem] lg:w-[1.55rem] h-[1.25rem] w-[1.25rem]" />
        </button>
      )}
    </div>
  );
}

export default EditGameMode;

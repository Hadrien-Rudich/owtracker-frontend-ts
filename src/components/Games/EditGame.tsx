import { RiEditFill } from 'react-icons/ri';
import { gameStore } from '../../store/gameStore';
import type { GameData } from '../../types/store/gameTypes';

function EditGame({ gameObj }: { gameObj: GameData }) {
  const { selectedGame, selectGame, setIsUpdatingGame, unselectGame } =
    gameStore();

  const handleEdit = () => {
    if (selectedGame === gameObj) {
      console.log(selectedGame, gameObj);
      unselectGame();
    } else {
      console.log(selectedGame, gameObj);

      setIsUpdatingGame(true);
      selectGame(gameObj);
    }
  };
  return (
    <button
      type="button"
      value={gameObj.id}
      onClick={handleEdit}
      className="hover:scale-125"
    >
      <RiEditFill className="sign h-5 w-5" />
    </button>
  );
}

export default EditGame;

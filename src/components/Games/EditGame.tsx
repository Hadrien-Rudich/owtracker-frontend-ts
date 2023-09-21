import { useEffect, useRef, KeyboardEvent } from 'react';
import { RiEditFill } from 'react-icons/ri';
import { gameStore } from '../../store/gameStore';
import type { GameData } from '../../types/store/gameTypes';

function EditGame({ gameObj }: { gameObj: GameData }) {
  const { selectedGame, setIsUpdatingGame, isUpdatingGame } = gameStore();

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setIsUpdatingGame(!isUpdatingGame);
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.focus();
  }, []);

  const handleCancelEdit = () => {
    console.log('handleCancelEdit');
    setIsUpdatingGame(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      console.log('handleCancelEdit');

      handleCancelEdit();
    }
  };

  return (
    <div className="flex" ref={divRef}>
      {isUpdatingGame ? (
        <div className="flex gap-12">
          <select name="result" id="result-select">
            <option value="win">Win</option>
            <option value="loss">Loss</option>

            <option value="draw">Draw</option>
          </select>

          <button onClick={handleEdit}>zob</button>
        </div>
      ) : (
        <button
          type="button"
          value={gameObj.id}
          onClick={handleEdit}
          onKeyDown={handleKeyDown}
          className="hover:scale-125"
          // ref={divRef}
        >
          <RiEditFill className="sign h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default EditGame;

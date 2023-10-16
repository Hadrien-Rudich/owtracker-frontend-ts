import { ImPlus } from 'react-icons/im';

import { gameStore } from '../../../store/gameStore';

function CreateGame() {
  const { isCreatingGame, setIsCreatingGame } = gameStore();

  const handleCreation = () =>
    // event: React.MouseEvent<HTMLButtonElement>
    {
      // event.stopPropagation();
      setIsCreatingGame(true);
    };

  return (
    <div className="flex">
      {!isCreatingGame && (
        <button
          type="button"
          onClick={handleCreation}
          className="hover:scale-125"
        >
          <ImPlus className="sign lg:h-[1.35rem] lg:w-[1.35rem] h-[1.55rem] w-[1.55rem]" />
        </button>
      )}
    </div>
  );
}

export default CreateGame;

import { ImPlus } from 'react-icons/im';

import { gameStore } from '../../../store/gameStore';

function NewGameMode() {
  const { setIsCreatingGame, clearNewGame } = gameStore();

  const handleCreation = () => {
    clearNewGame();
    setIsCreatingGame(true);
  };

  return (
    <div className="flexdiv bg-mainColor px-8 h-12 rounded-sm bg-opacity-100">
      <button
        className="sign flexdiv gap-4"
        type="button"
        onClick={handleCreation}
      >
        <ImPlus className=" lg:h-[1.35rem] lg:w-[1.35rem] h-[1.55rem] w-[1.55rem]" />
        <p className=" text-2xl">NEW GAME</p>
        <span className="sr-only">Add new game</span>
      </button>
    </div>
  );
}

export default NewGameMode;

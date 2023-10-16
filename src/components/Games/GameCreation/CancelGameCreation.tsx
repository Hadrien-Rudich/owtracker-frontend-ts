// import { KeyboardEvent } from 'react';
import { ImCross } from 'react-icons/im';
import { gameStore } from '../../../store/gameStore';

function CancelGameCreation() {
  const { setIsCreatingGame } = gameStore();

  const handleCancelCreation = () => {
    setIsCreatingGame(false);
  };

  return (
    <div className="flex">
      <button type="button" className="text-warning hover:scale-125">
        <ImCross
          onClick={handleCancelCreation}
          className="sign lg:h-[1.2rem] lg:w-[1.2rem] h-[1.4rem] w-[1.4rem]"
        />
      </button>
    </div>
  );
}

export default CancelGameCreation;

// import { KeyboardEvent } from 'react';
import { ImCross } from 'react-icons/im';
import { gameStore } from '../../../store/gameStore';

function CancelGameEdit() {
  const { setIsUpdatingGame } = gameStore();

  const handleCancelEdit = () => {
    setIsUpdatingGame(false);
  };

  return (
    <button type="button" className="text-warning hover:scale-125">
      <ImCross
        onClick={handleCancelEdit}
        className="sign lg:h-[1.3rem] lg:w-[1.3rem] h-[1rem] w-[1rem]"
      />
    </button>
  );
}

export default CancelGameEdit;

// import { KeyboardEvent } from 'react';
import { ImCross } from 'react-icons/im';
import { gameStore } from '../../../store/gameStore';

function CancelGameEdit() {
  const { setIsUpdatingGame } = gameStore();

  const handleCancelEdit = () => {
    setIsUpdatingGame(false);
  };

  // const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
  //   if (event.key === 'Escape') {
  //     console.log('handleCancelEdit');

  //     handleCancelEdit();
  //   }
  // };

  return (
    <button type="button" className="text-warning hover:scale-125">
      <ImCross
        onClick={handleCancelEdit}
        className="sign lg:h-[1.2rem] lg:w-[1.2rem] h-[1.4rem] w-[1.4rem]"
      />
    </button>
  );
}

export default CancelGameEdit;

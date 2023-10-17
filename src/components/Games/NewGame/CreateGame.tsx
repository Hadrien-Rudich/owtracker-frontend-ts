import { FormEvent } from 'react';
import { FaCheck } from 'react-icons/fa';
import useGameAddMutation from '../../../hooks/games/useGameAddMutation';
import { gameStore } from '../../../store/gameStore';
import { gameReportStore } from '../../../store/gameReportStore';

function CreateNewGame() {
  const { setSavingGameInProgress } = gameReportStore();

  const { setGameSavedToast, setIsCreatingGame } = gameStore();

  const mutateGame = useGameAddMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSavingGameInProgress(true);
    mutateGame();
    setGameSavedToast(false);
    setIsCreatingGame(false);
  };

  return (
    <form onSubmit={handleSubmit} action="submit">
      <button type="submit" className="text-validate hover:scale-125">
        <FaCheck className="sign lg:h-[1.2rem] lg:w-[1.2rem] h-[1.4rem] w-[1.4rem]" />
      </button>
    </form>
  );
}

export default CreateNewGame;

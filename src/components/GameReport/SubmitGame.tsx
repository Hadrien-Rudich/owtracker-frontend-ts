import { FormEvent } from 'react';
import { gameReportStore } from '../../store/gameReportStore';
import { gameStore } from '../../store/gameStore';
import useGameAddMutation from '../../hooks/games/useGameAddMutation';

function SubmitGame() {
  const { savingGameInProgress, setSavingGameInProgress } = gameReportStore();

  const { setGameSavedToast } = gameStore();

  const mutateGame = useGameAddMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSavingGameInProgress(true);
    mutateGame();
    setGameSavedToast(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="submit">
        <button
          type="submit"
          disabled={savingGameInProgress}
          className={
            !savingGameInProgress ? 'button bg-thirdColor' : 'button cancel'
          }
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default SubmitGame;

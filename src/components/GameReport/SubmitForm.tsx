import { FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { gameReportStore } from '../../store/gameReportStore';
import { addGameToApi, GameAddedToApi } from '../../services/API/games';
import { authStore } from '../../store/authStore';
import { profileStore } from '../../store/profileStore';
import { gameStore } from '../../store/gameStore';

function SubmitForm() {
  const {
    selectedHeroes,
    selectedMap,
    selectedMapImageUrl,
    selectedResult,
    selectedMapType,
    selectedHeroesImageUrl,
    savingGameInProgress,
    setSavingGameInProgress,
    reset,
  } = gameReportStore();

  const { userData } = authStore();
  const { selectedProfile } = profileStore();
  const { addGame, setGameSavedToast } = gameStore();

  const mutation = useMutation({
    mutationFn: () =>
      addGameToApi(userData.id, selectedProfile.id, {
        result: selectedResult,
        map: selectedMap,
        mapType: selectedMapType,
        mapImageUrl: selectedMapImageUrl,
        heroes: selectedHeroes,
        heroesImageUrl: selectedHeroesImageUrl,
      }),
    onSuccess: (newGameAddedToApi: GameAddedToApi) => {
      addGame(newGameAddedToApi.game);
      setTimeout(() => {
        setSavingGameInProgress(false);
        reset();
        setGameSavedToast(true);
      }, 1000);
    },
    retry: 1,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSavingGameInProgress(true);
    mutation.mutate();
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

export default SubmitForm;

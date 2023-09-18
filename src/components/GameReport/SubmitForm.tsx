import { FormEvent } from 'react';
import { gameReportStore } from '../../store/gameReportStore';
import { addGameToApi } from '../../services/API/games';
import { authStore } from '../../store/authStore';
import { profileStore } from '../../store/profileStore';
import { gameStore } from '../../store/gameStore';

function SubmitForm() {
  const {
    selectedHeroes: heroes,
    selectedMap: map,
    selectedMapImageUrl: mapImageUrl,
    selectedResult: result,
    selectedMapType: mapType,
    selectedHeroesImageUrl: heroesImageUrl,
    saveGame,
    toggleSaveGame,
    reset,
  } = gameReportStore();

  const { userData } = authStore();
  const { selectedProfile: profileData } = profileStore();
  const { addGame: addGameData } = gameStore();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toggleSaveGame();

    const gameToApi = await addGameToApi(userData.id, profileData.id, {
      result,
      map,
      mapType,
      mapImageUrl,
      heroes,
      heroesImageUrl,
    });

    addGameData(gameToApi.game);
    setTimeout(() => {
      toggleSaveGame();
      reset();
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="submit">
        <button
          type="submit"
          disabled={saveGame}
          className={!saveGame ? 'button bg-thirdColor' : 'button cancel'}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default SubmitForm;

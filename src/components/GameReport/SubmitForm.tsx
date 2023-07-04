import { FormEvent } from 'react';
import { gameReportStore } from '../../store/gameReportStore';
import { addGameToApi } from '../../services/ApiService';
import { authStore } from '../../store/authStore';
import { profileStore } from '../../store/profileStore';
import { gameStore } from '../../store/gameStore';

function SubmitForm() {
  const { heroes, map, mapImageUrl, result, mapType, heroesImageUrl } =
    gameReportStore();

  const { userData } = authStore();
  const { profileData } = profileStore();
  const { addGameData } = gameStore();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const gameToApi = await addGameToApi(userData.id, profileData.id, {
      result,
      map,
      mapType,
      mapImageUrl,
      heroes,
      heroesImageUrl,
    });

    addGameData(gameToApi.game);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="submit">
        <button type="submit" className="button bg-thirdColor">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default SubmitForm;

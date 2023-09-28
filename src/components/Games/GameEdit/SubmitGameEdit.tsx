import { FaCheck } from 'react-icons/fa';
import {
  useMutation,
  // useQueryClient
} from '@tanstack/react-query';
import { gameStore } from '../../../store/gameStore';
import type { GameData } from '../../../types/store/gameTypes';
import { updateGameOnApi, GameAddedToApi } from '../../../services/API/games';

function SubmitGameEdit({ gameObj }: { gameObj: GameData }) {
  const {
    // selectGame,
    updatedGameResult,
    updatedGameDate,
    setIsUpdatingGame,
    setGameSavedToast,
    updateGame,
  } = gameStore();

  // const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () =>
      updateGameOnApi(gameObj.userId, gameObj.profileId, gameObj.id, {
        ...gameObj,
        result: updatedGameResult,
        date: updatedGameDate,
      }),
    onSuccess: (UpdatedGameOnApi: GameAddedToApi) => {
      // selectGame(UpdatedGameOnApi.game);
      setIsUpdatingGame(false);
      setGameSavedToast(true);
      updateGame(UpdatedGameOnApi.game.id, UpdatedGameOnApi.game);
      // queryClient.invalidateQueries({
      //   queryKey: ['gamesData'],
      // });
    },
    retry: 1,
  });

  const handleSubmit = () => {
    if (
      gameObj.result === updatedGameResult &&
      gameObj.date === updatedGameDate
    ) {
      console.log('submitted Game was identical to original Game');
    } else {
      console.log('handleSubmit');
      console.log(gameObj);
      mutation.mutate();
    }
  };

  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className="text-validate hover:scale-125"
    >
      <FaCheck className="sign lg:h-[1.2rem] lg:w-[1.2rem] h-[1.4rem] w-[1.4rem]" />
    </button>
  );
}

export default SubmitGameEdit;

import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../../store/authStore';
import { gameStore } from '../../store/gameStore';
import type { GameData } from '../../types/store/gameTypes';
import { deleteGameFromApi } from '../../services/API/games';

function DeleteGame({ gameObj }: { gameObj: GameData }) {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { deleteGameData } = gameStore();

  const mutation = useMutation({
    mutationFn: () =>
      deleteGameFromApi(gameObj.userId, gameObj.profileId, gameObj.id),
    onSuccess: () => {
      deleteGameData(gameObj.id);
    },
    retry: 1,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleDeleteClick = async () => {
    mutation.mutate();
  };
  return (
    <div>
      <button
        className="w-12 h-12 bg-thirdColor"
        type="button"
        onClick={handleDeleteClick}
      >
        DELETE
      </button>
    </div>
  );
}

export default DeleteGame;

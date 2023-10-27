import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { gameStore } from '../../../store/gameStore';
import type { GameData } from '../../../types/store/gameTypes';
import useGameUpdateMutation from '../../../hooks/games/useGameUpdateMutation';
import ErrorToast from '../../ErrorToast';

function UpdateGame({ gameObj }: { gameObj: GameData }) {
  const {
    selectedGameResult,
    selectedGameDateInFormat,
    selectedGameMap,
    selectedGameHeroes,
  } = gameStore();

  const [errorToast, setErrorToast] = useState(false);
  const [errorToastMessage, setErrorToastMessage] = useState('');

  const mutateGame = useGameUpdateMutation({ gameObj });

  const handleSubmit = () => {
    if (
      gameObj.result === selectedGameResult &&
      gameObj.date === selectedGameDateInFormat &&
      gameObj.map === selectedGameMap &&
      gameObj.heroes === selectedGameHeroes
    ) {
      setErrorToastMessage('Game is identical');
      setErrorToast(true);
      setTimeout(() => {
        setErrorToast(false);
      }, 4500);
      throw new Error('Game is identical');
    }
    if (selectedGameHeroes.length < 1) {
      setErrorToastMessage('Game requires a hero');
      setErrorToast(true);
      setTimeout(() => {
        setErrorToast(false);
      }, 4500);
      throw new Error('Game requires a hero');
    }
    mutateGame();
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        type="submit"
        className="text-validate hover:scale-125 relative"
      >
        <FaCheck className="sign lg:h-[1.2rem] lg:w-[1.2rem] h-[1.4rem] w-[1.4rem]" />
      </button>
      {errorToast && (
        <ErrorToast toastText={errorToastMessage} booleanProp={errorToast} />
      )}
    </>
  );
}

export default UpdateGame;

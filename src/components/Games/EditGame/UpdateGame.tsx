import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { gameStore } from '../../../store/gameStore';
import type { GameData } from '../../../types/store/gameTypes';
import useGameUpdateMutation from '../../../hooks/games/useGameUpdateMutation';
import ErrorToast from '../../ErrorToast';
import { GameUpdateSchema } from '../../../validation/dataValidation';

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
      }, 2000);
    }

    const results = GameUpdateSchema.safeParse({
      result: selectedGameResult,
      map: selectedGameMap,
      heroes: selectedGameHeroes,
      date: selectedGameDateInFormat,
    });
    if (results.success) {
      mutateGame();
    } else if (!results.success) {
      results.error.errors.forEach((error) => {
        switch (error.path[0]) {
          case 'heroes':
            setErrorToast(true);
            setErrorToastMessage(error.message);
            break;
          default:
            break;
        }
      });
    }
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
        <ErrorToast
          toastText={errorToastMessage}
          booleanProp={errorToast}
          topProp="top-[-3.9rem]"
          leftProp="left-[-5.5rem]"
        />
      )}
    </>
  );
}

export default UpdateGame;

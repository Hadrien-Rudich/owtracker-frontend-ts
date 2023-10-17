import CancelNewGame from './CancelNewGame';
import { gameStore } from '../../../store/gameStore';
import CreateNewGame from './CreateGame';

function NewGameButtons() {
  const { isCreatingGame } = gameStore();

  return (
    <div className="GameButtons_container absolute 2xl:left-[-3rem] xl:left-[-3rem] lg:left-[-4rem] md:left-[-5rem] sm:left-[-5rem] xs:right-[1.5rem] xxs:right-[2.2rem] right-[1rem]">
      <div className="xl:gap-3 lg:gap-1 gap-4 flexdiv  ">
        {isCreatingGame && (
          <>
            <CreateNewGame />

            <CancelNewGame />
          </>
        )}
      </div>
    </div>
  );
}

export default NewGameButtons;

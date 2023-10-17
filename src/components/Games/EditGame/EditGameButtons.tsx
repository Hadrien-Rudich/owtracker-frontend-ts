import CancelGameEdit from './CancelGameEdit';
import UpdateGame from './UpdateGame';
import { gameStore } from '../../../store/gameStore';
import DeleteGame from './DeleteGame';
import EditGameMode from './EditGameMode';

import type { GameData } from '../../../types/store/gameTypes';

function EditGameButtons({ gameObj }: { gameObj: GameData }) {
  const { selectedGame, isUpdatingGame, isCreatingGame } = gameStore();

  return (
    <div
      className={`${
        gameObj.id === selectedGame.id
          ? 'absolute 2xl:left-[-3rem] xl:left-[-3rem] lg:left-[-4rem] md:left-[-5rem] sm:left-[-5rem] xs:right-[1.5rem] xxs:right-[2.2rem] right-[1rem]'
          : 'hidden'
      } GameButtons_container`}
    >
      <div className="xl:gap-3 lg:gap-1 gap-4 flexdiv">
        {!isUpdatingGame &&
        !isCreatingGame &&
        gameObj.id === selectedGame.id ? (
          <>
            <EditGameMode gameObj={gameObj} />
            <DeleteGame gameObj={gameObj} />
          </>
        ) : (
          !isCreatingGame &&
          gameObj.id === selectedGame.id && (
            <>
              <UpdateGame gameObj={gameObj} />
              <CancelGameEdit />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default EditGameButtons;

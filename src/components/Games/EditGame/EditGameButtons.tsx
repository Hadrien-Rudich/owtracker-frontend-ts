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
        gameObj.id === selectedGame.id ? 'flex' : 'hidden'
      } GameButtons_container`}
    >
      <div className="flexdiv gap-2">
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

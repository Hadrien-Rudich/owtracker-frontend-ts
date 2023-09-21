import CancelGameEdit from '../GameEdit/CancelGameEdit';
import ConfirmGameEdit from '../GameEdit/ConfirmGameEdit';
import { gameStore } from '../../../store/gameStore';
import DeleteGame from '../GameEdit/DeleteGame';
import EditGame from '../GameEdit/EditGame';

import type { GameData } from '../../../types/store/gameTypes';

function GameButtons({ gameObj }: { gameObj: GameData }) {
  const { selectedGame, isUpdatingGame } = gameStore();

  return (
    <div
      className={`${
        gameObj.id === selectedGame.id
          ? 'absolute 2xl:right-[1.15rem] xl:right-[0.65rem] lg:right-[0.35rem] md:right-[5.5rem] sm:right-[5.5rem] xs:right-[4.5rem] xxs:right-[4.2rem] right-[4rem]'
          : 'hidden'
      } GameButtons_container ]`}
    >
      <div className="xl:gap-3 lg:gap-1 gap-4 flexdiv">
        {!isUpdatingGame && gameObj.id === selectedGame.id ? (
          <>
            <EditGame gameObj={gameObj} />
            <DeleteGame gameObj={gameObj} />
          </>
        ) : (
          gameObj.id === selectedGame.id && (
            <>
              <ConfirmGameEdit />
              <CancelGameEdit />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default GameButtons;

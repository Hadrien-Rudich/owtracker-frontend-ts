import CancelGameEdit from '../GameEdit/CancelGameEdit';
import SubmitGameEdit from '../GameEdit/SubmitGameEdit';
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
          ? 'absolute 2xl:left-[-3rem] xl:left-[-3rem] lg:left-[-4rem] md:left-[-5rem] sm:left-[-5rem] xs:right-[1.5rem] xxs:right-[2.2rem] right-[1rem]'
          : 'hidden'
      } GameButtons_container`}
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
              <SubmitGameEdit gameObj={gameObj} />
              <CancelGameEdit />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default GameButtons;

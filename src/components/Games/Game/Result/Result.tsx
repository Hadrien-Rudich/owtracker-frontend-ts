import { getResultClassNameFromGame } from '../../../../utils/utils';
import type { GameData } from '../../../../types/store/gameTypes';

function Result({ gameObj }: { gameObj: GameData }) {
  return (
    <div className="Result_container">
      <p
        className={`${getResultClassNameFromGame(gameObj)}     
 result_container`}
      >
        {gameObj.result.slice(0, 1)}
      </p>
    </div>
  );
}

export default Result;

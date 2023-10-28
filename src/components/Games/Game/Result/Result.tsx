import { getResultClassNameFromGame } from '../../../../utils/classNameUtils';
import type { GameData } from '../../../../types/store/gameTypes';

function Result({ gameObj }: { gameObj: GameData }) {
  return (
    <p
      className={`${getResultClassNameFromGame(gameObj)}     
 result_container`}
    >
      {gameObj.result}
    </p>
  );
}

export default Result;

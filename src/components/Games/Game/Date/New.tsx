import { dateNowInGameFormat } from '../../../../utils/utils';
import type { GameData } from '../../../../types/store/gameTypes';

function New({ gameObj }: { gameObj: GameData }) {
  return (
    <p
      className={`${
        gameObj.date.slice(0, 5) === dateNowInGameFormat()
          ? 'block absolute right-8 top-[0.85rem] text-new text-sm italic  tracking-widest'
          : 'hidden'
      }`}
    >
      NEW
    </p>
  );
}

export default New;

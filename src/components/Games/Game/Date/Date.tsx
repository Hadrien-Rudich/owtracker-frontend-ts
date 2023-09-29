import type { GameData } from '../../../../types/store/gameTypes';

function Date({ gameObj }: { gameObj: GameData }) {
  return <p>{gameObj.date.slice(0, 5)}</p>;
}

export default Date;

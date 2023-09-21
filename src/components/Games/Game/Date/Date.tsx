import type { GameData } from '../../../../types/store/gameTypes';

function Date({ gameObj }: { gameObj: GameData }) {
  return (
    <div className="Date_container">
      <p>{gameObj.date.slice(0, 5)}</p>
    </div>
  );
}

export default Date;

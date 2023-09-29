import type { GameData } from '../../../../types/store/gameTypes';

function Heroes({ gameObj }: { gameObj: GameData }) {
  return (
    <>
      {gameObj.heroesImageUrl.map((heroImage) => (
        <img
          key={heroImage}
          src={`images/heroes/${heroImage}`}
          className="sm:h-10 h-7"
          alt=""
        />
      ))}
    </>
  );
}

export default Heroes;

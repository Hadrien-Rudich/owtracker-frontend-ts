/* eslint-disable react/require-default-props */
import type { GameData } from '../../../../types/store/gameTypes';
import type { HeroData } from '../../../../types/store/gameReportTypes';

interface HeroesProps {
  gameObj?: GameData;
  heroObj?: HeroData;
  imgHeight?: string;
}

function Heroes({ gameObj, heroObj, imgHeight }: HeroesProps) {
  return (
    <>
      {gameObj &&
        gameObj.heroesImageUrl.map((heroImage) => (
          <img
            key={heroImage}
            src={`images/heroes/${heroImage}`}
            className={`${imgHeight}`}
            // className="sm:h-10 h-7"
            alt=""
          />
        ))}

      {heroObj && (
        <img
          key={heroObj.id}
          src={`images/heroes/${heroObj.imageUrl}`}
          className={`${imgHeight}`}
          // className="sm:h-10 h-7"
          alt=""
        />
      )}
    </>
  );
}

export default Heroes;

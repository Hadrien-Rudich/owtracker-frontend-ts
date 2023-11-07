/* eslint-disable react/require-default-props */
import type { GameData } from '../../../../types/store/gameTypes';
import type { HeroData } from '../../../../types/store/gameDataTypes';

interface HeroesProps {
  gameObj?: GameData;
  heroObj?: HeroData;
  imgHeight?: string;
}

function Heroes({ gameObj, heroObj, imgHeight }: HeroesProps) {
  return (
    <div className="Heroes_container flex md:justify-center justify-start items-center content-center  sm:gap-1 gap-0">
      {/* <div className="Heroes_container grid grid-cols-2 justify-center gap-"> */}
      {gameObj &&
        gameObj.heroesImageUrl.map((heroImage) => (
          <div
            className="bg-activeColor rounded-sm "
            key={(gameObj.id, heroImage)}
          >
            <img
              src={`images/heroes/${heroImage}`}
              className={`${imgHeight}`}
              alt=""
            />
          </div>
        ))}

      {heroObj && (
        <img
          key={heroObj.id}
          src={`images/heroes/${heroObj.imageUrl}`}
          className={`${imgHeight}`}
          alt=""
        />
      )}
    </div>
  );
}

export default Heroes;

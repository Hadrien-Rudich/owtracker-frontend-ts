import { MouseEvent } from 'react';
import { gameReportStore } from '../../../store/gameReportStore';

function Hero() {
  const {
    rolesData,
    heroes,
    heroesData,
    addHero,
    removeHero,
    addHeroImageUrl,
    removeHeroImageUrl,
  } = gameReportStore();

  const handleHeroClick = (
    event: MouseEvent<HTMLButtonElement>,
    imageUrl: string
  ) => {
    const targetHero = event.currentTarget.value;
    const heroInList = heroes.includes(targetHero);
    if (!heroInList) {
      addHero(targetHero);
      addHeroImageUrl(imageUrl);
    } else {
      removeHero(targetHero);
      removeHeroImageUrl(imageUrl);
    }
  };

  return (
    <div className="heroescomponent_container px-2">
      <div className="heroesByRole_container grid grid-cols-3 justify-center content-center">
        {rolesData.map((r) => (
          <div key={r.label} className="heroesandrole_container py-6">
            <div className="role_container pb-6 flexdiv ">
              <img
                className="md:h-10 lg:h-11 h-9 drop-shadow-lg"
                src={`images/roles/${r.imageUrl}`}
                alt="role icon"
              />
            </div>

            <div className="heroes_container flexdiv">
              <div className="lg:w-2/3 w-full flexdiv flex-wrap sm:gap-1 gap-0">
                {heroesData
                  .filter(
                    (hero) => hero.role.toLowerCase() === r.label.toLowerCase()
                  )
                  .map((h) => (
                    <button
                      className="bg-mainColor hover:bg-activeColor shadow-lg"
                      key={h.slug}
                      value={h.slug}
                      onClick={(event) => handleHeroClick(event, h.imageUrl)}
                      type="button"
                    >
                      <img
                        className={`${
                          heroes.includes(h.slug) ? 'selected' : 'unselected'
                        } list md:h-10 lg:h-11 h-9`}
                        src={`images/heroes/${h.imageUrl}`}
                        alt=""
                      />
                    </button>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;

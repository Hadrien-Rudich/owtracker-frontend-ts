import { useState } from 'react';
import { FaRegSquare, FaCheck } from 'react-icons/fa';
import { gameDataStore } from '../../../../store/gameDataStore';
import Heroes from '../../Game/Heroes/Heroes';
// import ClearResultFilters from './ClearResultFilters';

function HeroesFilters() {
  const { heroesData } = gameDataStore();

  const [filterBoxIsTicked, setFilterBoxIsTicked] = useState(false);

  const handleFilterClick = () => {
    setFilterBoxIsTicked(!filterBoxIsTicked);
  };

  return (
    <div className="Filter_container relative ring-2 shadow-md rounded-sm">
      <div className="flex flex-col">
        <div className="option_container  flex justify-around w-full ">
          <div className="flexdiv w-1/2">
            <p className=" tracking-widest ">Heroes</p>
          </div>
          <div className="button_container flexdiv w-1/2">
            <button
              type="button"
              className="z-10 w-5 h-5 hover:scale-110"
              onClick={handleFilterClick}
            >
              <FaRegSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
        {filterBoxIsTicked && (
          <div className="p-4 bg-mainColor flexdiv col">
            <ul className="heroes_container w-full h-full  flex flex-wrap gap-0.5">
              {heroesData.map((hero) => (
                <li key={hero.id}>
                  <button
                    type="button"
                    className="hero_button bg-activeColor rounded-sm"
                  >
                    <Heroes heroObj={hero} imgHeight="h-9" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {filterBoxIsTicked && (
        <>
          {/* <div className="clearFilter_container">
            {!lossIsTicked && !winIsTicked && !drawIsTicked ? null : (
              <ClearResultFilters
                winBooleanSetter={setWinIsTicked}
                lossBooleanSetter={setLossIsTicked}
                drawBooleanSetter={setDrawIsTicked}
              />
            )}
          </div> */}
          <div className="z-0 absolute top-[0.25rem] right-[1.5rem] bg-ringColor w-4 h-4 rounded-sm">
            <FaCheck className="absolute top-0.5 right-0.5 w-3 h-3 z-0" />
          </div>
        </>
      )}
    </div>
  );
}

export default HeroesFilters;

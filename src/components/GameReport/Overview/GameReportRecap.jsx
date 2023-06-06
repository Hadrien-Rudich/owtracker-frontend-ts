import React from 'react';
import gameReportStore from '../../../store/gameReportStore';
import getResultClassNameFromGameResult from '../../../utils/outcomes';

function GameReportRecap() {
  const { map, mapsData, heroes, heroesData, gameResult } = gameReportStore();

  return (
    <div className="historyDetails_container flexdiv col gap  text-secondaryText">
      {map !== null && heroes.length > 0 && gameResult !== null && (
        <div className="gameHistory_container w-1/2 flexdiv row h-12 bg-mainColor text-mainText border border-activeColor">
          <div className="relative mapImage_container w-5/12">
            <img
              className="h-11 w-full object-cover"
              src={`images/maps/${
                mapsData.find((mapData) => mapData.slug === map)?.imageUrl
              }`}
              alt="selected map"
            />

            <div className="absolute inset-0">
              <p className="absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                {map}
              </p>
            </div>
          </div>
          <div className="heroImage_container w-5/12 flexdiv gap-px ">
            {heroes.map((hero) => (
              <img
                key={hero}
                src={`images/heroes/${
                  heroesData.find((heroData) => heroData.slug === hero).imageUrl
                }`}
                className="h-8"
                alt="selected hero"
              />
            ))}
          </div>
          <div
            className={`result_container flexdiv w-1/12 ${getResultClassNameFromGameResult(
              gameResult
            )}`}
          >
            <p>{gameResult}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameReportRecap;

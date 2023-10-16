import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../store/gameStore';
import { gameReportStore } from '../../../store/gameReportStore';
// import Result from './Result/Result';
// import EditResult from './Result/EditResult';
import Date from './Date/Date';
// import EditDate from './Date/EditDate';
// import Heroes from './Heroes/Heroes';
import Map from './Map/Map';
import NewGameMap from './Map/Creation/NewGameMap';
import NewGameHeroes from './Heroes/Creation/NewGameHeroes';
import NewGameResult from './Result/Creation/NewGameResult';
import NewGameDate from './Date/Creation/NewGameDate';
import CreateGame from '../GameCreation/CreateGame';
// import EditHeroes from './Heroes/EditHeroes';
import MapTypes from './Map/MapTypes';

function NewGame() {
  const {
    isCreatingGame,
    selectedGame,
    selectedGameMapType,
    selectGameMap,
    updateSelectedGame,
  } = gameStore();
  const { heroesData, mapsData } = gameReportStore();

  // const ResultComponent = isCreatingGame ? EditResult : Result;
  // const DateComponent = isCreatingGame ? EditDate : Date;
  // const MapComponent = isCreatingGame ? NewGameMap : Map;
  // const HeroesComponent = isCreatingGame ? EditHeroes : Heroes;

  const selectMap = (map: string, mapImage: string) => {
    selectGameMap(map, mapImage);
    updateSelectedGame({ ...selectedGame, map, mapImageUrl: mapImage });
    // toggleDropDown();
  };

  return (
    <div className="NewGame_container flexdiv col tracking-wider w-full z-50">
      {/* <div className="newGame_container bg-mainColor w-full h-10 flexdiv border-[0.01rem] border-activeColor">
        <CreateGame />
      </div> */}
      <div
        role="button"
        tabIndex={0}
        className="w-full flexdiv border-[0.01rem] border-activeColor"
      >
        <div className="newGame_container game relative">
          <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
          <div className="Map_container w-[45%] lg:w[40%] mapImage_container h-12">
            <NewGameMap />
          </div>
          <div className="Heroes_container flex sm:justify-center justify-start pl-4  gap-0.5 w-[45%] lg:w[40%] relative">
            <NewGameHeroes />
          </div>
          <div className="details_container flex lg:justify-center justify-end p-2 items-center xl:gap-2 gap-1 w-[20%] lg:w[10%] xs:text-base text-sm">
            {/* <div className="gamebuttons_container flexdiv relative">
          <GameButtons gameObj={gameObj} />
        </div> */}
            <div className="Result_container md:w-[25%] w-[30%]">
              <NewGameResult />
            </div>
            <div className="Date_container md:w-[25%] w-[30%]">
              <NewGameDate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGame;

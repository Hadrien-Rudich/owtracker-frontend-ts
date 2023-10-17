import NewGameMap from './Game/Map/NewGame/NewGameMap';
import NewGameHeroes from './Game/Heroes/NewGame/NewGameHeroes';
import NewGameResult from './Game/Result/NewGame/NewGameResult';
import NewGameDate from './Game/Date/Creation/NewGameDate';
import NewGameButtons from './NewGame/NewGameButtons';

function NewGame() {
  return (
    <div className="NewGame_container flexdiv col tracking-wider w-full z-50">
      <div
        role="button"
        tabIndex={0}
        className="w-full flexdiv border-[0.01rem] border-activeColor"
      >
        <div className="newGame_container game relative">
          <div className="Map_container w-[45%] lg:w[40%] mapImage_container h-12">
            <NewGameMap />
          </div>
          <div className="Heroes_container flex sm:justify-center justify-start pl-4  gap-0.5 w-[45%] lg:w[40%] relative">
            <NewGameHeroes />
          </div>
          <div className="details_container flex lg:justify-center justify-end p-2 items-center xl:gap-2 gap-1 w-[20%] lg:w[10%] xs:text-base text-sm">
            <div className="gamebuttons_container flexdiv relative">
              <NewGameButtons />
            </div>
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

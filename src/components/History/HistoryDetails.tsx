import { historyStore } from '../../store/historyStore';
import { filterHistory } from '../../utils/filters';
import capitalizeFirstLetter from '../../utils/maps';
import { getResultClassNameFromHistory } from '../../utils/outcomes';

function HistoryDetails() {
  const { historyData, currentMonth } = historyStore();

  const filteredHistory = filterHistory(currentMonth, historyData);

  return (
    <div className="flexdiv col gap-[0.05rem] tracking-wider">
      {filteredHistory.map((history) => (
        <div
          key={history.id}
          className="gameHistory_container w-full flexdiv h-12 bg-mainColor hover:bg-activeColor hover:shadow-lg rounded-sm"
        >
          <div className="relative mapImage_container w-5/12">
            <img
              className="h-12 w-full object-cover rounded-sm rounded-r-none"
              src={`images/maps/${history.mapImageUrl}`}
              alt=""
            />
            <div className="absolute inset-0">
              <div className="flexdiv gap-4 absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                <p className="">{history.map}</p>

                <img
                  className="h-6 w-6"
                  src={`images/mapTypes/${capitalizeFirstLetter(
                    history.mapType
                  )}_icon.svg`}
                  alt="map type icon"
                />
              </div>
            </div>
          </div>
          <div className="heroImage_container w-5/12 flexdiv gap-0.5">
            {history.heroesImageUrl.map((heroImage) => (
              <img
                key={heroImage}
                src={`images/heroes/${heroImage}`}
                className="h-10"
                alt=""
              />
            ))}
          </div>
          <div
            className={`${getResultClassNameFromHistory(history)}     
            result_container flexdiv w-1/12 `}
          >
            <p>{history.result}</p>
          </div>
          <div className="w-1/12">
            <p>{history.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryDetails;

import React from 'react';
import gameReportStore from '../../../store/gameReportStore';

function MapsOverview() {
  const { map, mapsData } = gameReportStore();

  return (
    <div className="selectedMap_container flexdiv">
      <div key={map} className="flexdiv">
        <img
          className="h-16"
          src={`images/maps/${
            mapsData.find((mapData) => mapData.slug === map)?.imageUrl
          }`}
          alt="selected map"
        />
      </div>
    </div>
  );
}

export default MapsOverview;

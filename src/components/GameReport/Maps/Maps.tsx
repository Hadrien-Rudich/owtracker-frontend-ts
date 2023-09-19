import { useQueries } from '@tanstack/react-query';
import {
  fetchMapsFromApi,
  fetchMapTypesFromApi,
} from '../../../services/API/gameReport';
import type {
  MapData,
  MapTypeData,
} from '../../../types/store/gameReportTypes';

import MapTypes from './MapTypes';
import Map from './Map';
import { gameReportStore } from '../../../store/gameReportStore';

function Maps() {
  const { addMapsData, addMapTypesData } = gameReportStore();

  // const results =
  useQueries({
    queries: [
      {
        queryKey: ['mapsData'],
        queryFn: fetchMapsFromApi,
        onSuccess: (fetchedData: MapData[]) => {
          addMapsData(fetchedData);
        },
        staleTime: 1000 * 60 * 60 * 24 * 30,
        cacheTime: 1000 * 60 * 60 * 24 * 30 * 30,
      },

      {
        queryKey: ['mapTypesData'],
        queryFn: fetchMapTypesFromApi,
        onSuccess: (fetchedData: MapTypeData[]) => {
          addMapTypesData(fetchedData);
        },
        staleTime: 1000 * 60 * 60 * 24 * 30,
        cacheTime: 1000 * 60 * 60 * 24 * 30 * 30,
      },
    ],
  });

  // if (results.some((result) => result.isLoading)) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="maps_container bg-mainColor rounded-sm intenseShadow">
      <div className="maptype_container py-6">
        <MapTypes />
      </div>
      <div className="maps_container flexdiv">
        <Map />
      </div>
    </div>
  );
}

export default Maps;

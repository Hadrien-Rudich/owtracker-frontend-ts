import { useEffect } from 'react';
import {
  fetchMapsFromApi,
  fetchMapTypesFromApi,
} from '../../../services/ApiService';
import MapTypes from './MapTypes';
import Map from './Map';
import { gameReportStore } from '../../../store/gameReportStore';

function Maps() {
  const { addMapsData, addMapTypesData } = gameReportStore();

  useEffect(() => {
    async function getMapsData() {
      try {
        const data = await fetchMapsFromApi();
        addMapsData(data);
      } catch (error) {
        console.error('Failed to fetch maps data', error);
      }
    }

    getMapsData();
  }, [addMapsData]);

  useEffect(() => {
    async function getTypesData() {
      try {
        const data = await fetchMapTypesFromApi();
        addMapTypesData(data);
      } catch (error) {
        console.error('Failed to fetch maps data', error);
      }
    }

    getTypesData();
  }, [addMapTypesData]);

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

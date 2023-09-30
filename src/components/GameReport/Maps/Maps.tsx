import useMapsQueries from '../../../hooks/useMapsQueries';
import MapTypes from './MapTypes';
import Map from './Map';

function Maps() {
  useMapsQueries();

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

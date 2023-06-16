import {useMemo} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './index.css'


function MapComponent(){
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    
  });

if(isLoaded){
  return(
    <div>
      <GoogleMap zoom={11} center={{lat:14.60905370, lng:121.02225650}} mapContainerClassName="map-container mx-auto" ></GoogleMap>
    </div>
  );
}else{
  return(
    <div>
      <h1>DID NOT WORK</h1>
    </div>
  );
}



}

export default MapComponent
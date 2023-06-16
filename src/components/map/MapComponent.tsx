import {useMemo} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './index.css'


type MapComponentProps ={
  latitude: number;
  longtitude: number;
  zoom: number;

}

function MapComponent(props : MapComponentProps){
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    
  });

if(isLoaded){
  return(
    <div>
      <GoogleMap zoom={props.zoom} center={{lat: props.latitude, lng: props.longtitude}} mapContainerClassName="map-container mx-auto" ></GoogleMap>
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
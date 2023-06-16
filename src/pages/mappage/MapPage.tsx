import NavbarComponent from "../../components/navbar/Navbar";
import MapComponent from "../../components/map/MapComponent";

import ListEmployee from "../../components/employeelist/ListEmployee";

document.title = "SoftGray | Map";
function MapPage(){
 
  return(
    <>
  
    <NavbarComponent/>
    <MapComponent latitude={14.60905370} longtitude={121.02225650} zoom={11}/>
    <ListEmployee fetchApiLink="https://dummy.restapiexample.com/api/v1/employees"/>

    </>
  )
}


export default MapPage;
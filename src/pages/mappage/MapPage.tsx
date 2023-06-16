import NavbarComponent from "../../components/navbar/Navbar";
import MapComponent from "../../components/map/MapComponent";
import BottomBlock from "../../components/bottom-section/BottomBlock";
import macBook from "../../assets/macbook.png"

document.title = "SoftGray | Map";
function MapPage(){
 
  return(
    <>
  
    <NavbarComponent/>
    <MapComponent latitude={14.60905370} longtitude={121.02225650} zoom={11}/>
    <BottomBlock subheader="test" header="test" description="test" imgSrc={macBook}/>

    </>
  )
}


export default MapPage;
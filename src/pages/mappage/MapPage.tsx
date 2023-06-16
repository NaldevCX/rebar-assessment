import NavbarComponent from "../../components/navbar/Navbar";
import MapComponent from "../../components/map/MapComponent";
import BottomBlock from "../../components/bottom-section/BottomBlock";
import macBook from "../../assets/macbook.png"
document.title = "SoftGray | Map";
function MapPage(){
 
  return(
    <>
  
    <NavbarComponent/>
    <MapComponent/>
    <BottomBlock subheader="test" header="test" description="test" imgSrc={macBook}/>

    </>
  )
}


export default MapPage;
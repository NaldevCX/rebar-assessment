

//PAGES
import HomePage from './pages/homepage/Homepage';
import MapPage from './pages/mappage/MapPage';
//LIBS
import {Route, Routes} from "react-router-dom";
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/task2" element={<MapPage/>}/>
        {/* <Route path="*" element={<PageNotFound/>} TODO 404 PAGE */}
      </Routes>
    </>

  )
}

export default App


// TODO:
// Fix Header block description responsiveness
// Fix Margins for header navlinks
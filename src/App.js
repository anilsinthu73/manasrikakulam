import { Navbar } from "./components/Navbar.js";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home.js";
import FamousFor from "./pages/FamousFor.js";
import Banks from "./pages/Banks.js";
import Schools from "./pages/Schools.js";
import Colleges from "./pages/Colleges.js";
import Hospitals from "./pages/Hospitals.js";
import Parks from "./pages/Parks.js";
import Beaches from "./pages/Beaches.js";
import HillStations from "./pages/HillStations.js";
import { Temples } from "./pages/Temples.js";
function App() {
return (
<div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/famousfor' element={<FamousFor/>}/>
        <Route path='/banks' element={<Banks/>}/>
        <Route path='/schools' element={<Schools/>}/>
        <Route path='/colleges' element={<Colleges/>}/>
        <Route path='/hospitals' element={<Hospitals/>}/>
        <Route path='/parks' element={<Parks/>}/>
        <Route path='/beaches' element={<Beaches/>}/>
        <Route path="/hillstations" element={<HillStations/>}/>
        <Route path="/temples" element={<Temples/>}/>
      </Routes>
      </Router>
    </div>
)
}

export default App;

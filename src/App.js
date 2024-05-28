import "./App.css";
import "./responsive.css";
import "./responsive1.css";
import "./App1.css";
import "./responsivetab1.css";
// import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DailyProgram from "./pages/dailyprogram/DailyProgram";
import History from "./pages/history/History";
import { AdhocCommittee } from "./pages/AdhocCommittee";
import Regulations from "./pages/Regulations";
import Resolution from "../src/pages/Resolution/Resolution"
import TheTemple from "./pages/TheTemple";
import Saicharita from "./pages/saicharita/Saicharita";
import SaileelaMag from "./pages/saileelaMag/SaileelaMag";
import AnnualReports from "./pages/Annual Reports/AnnualReports";
import PlacesAroundShirdi from "./pages/PlacesAroundShirdi";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dailyprogram" element={<DailyProgram />} />
        <Route path="/ad-hoc-committee" element={<AdhocCommittee />} />
        <Route path="/sanathan-regulation" element={<Regulations />} />

        <Route path="/history" element={<History />} />

        <Route path="/resolution" element={<Resolution />} />placetovisit
        <Route path="/the-temple" element={<TheTemple />} />
        <Route path="/placetovisit" element={<PlacesAroundShirdi/>} />

      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import "./responsive.css";
import "./responsive1.css";
import "./App1.css";
import "./responsivetab1.css";
import Aos from "aos";
import { Route, Router, Routes } from "react-router-dom";
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
// import Regulations from "./pages/Regulations";

// import { AdhocCommittee } from "./pages/AdhocCommittee";
// import Regulations from "./pages/Regulations";
// import History from "./pages/history/History"


// import Regulations from "./pages/Regulations";
// import { AdhocCommittee } from "./pages/AdhocCommittee";
// import Regulations from "./pages/Regulations";
// import History from "./pages/history/History"

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

        <Route path="/resolution" element={<Resolution />} />
        <Route path="/the-temple" element={<TheTemple />} />
        <Route path="/saicharita" element={<Saicharita/>} />
        <Route path="/saileelamag" element={<SaileelaMag/>} />

        


      </Routes>
    </div>
  );
}

export default App;

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
// >>>>>>> a999fe277df3188b0c73761b5cf5a7a62260477c

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
{/* <<<<<<< HEAD */}
        <Route path="/about" element={<About/>}/>
        <Route path="/dailyprogram" element={<DailyProgram/>}/>
        <Route path="/history" element={<History/>}/>

{/* ======= */}
        <Route path="/about" element={<About />} />
        <Route path="/dailyprogram" element={<DailyProgram />} />
        <Route path="/ad-hoc-committee" element={<AdhocCommittee />} />
        <Route path="/sanathan-regulation" element={<Regulations />} />
{/* >>>>>>> a999fe277df3188b0c73761b5cf5a7a62260477c */}
      </Routes>
    </div>
  );
}

export default App;

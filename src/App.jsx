import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Rules from "./pages/Rules";
import QR1 from "./pages/QR1";
import QR2 from "./pages/QR2";
import QR3 from "./pages/QR3";
import QR4 from "./pages/QR4";
import QR5 from "./pages/QR5";
import QR6 from "./pages/QR6";
import QR7 from "./pages/QR7";
import QR8 from "./pages/QR8";
import QR9 from "./pages/QR9";
import QR10 from "./pages/QR10";
import Rickroll from "./pages/Rickroll";
// import NoCheat from './pages/NoCheat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/t1nk" element={<QR1 />} />
        <Route path="/2rhb" element={<QR2 />} />
        <Route path="/t3nk" element={<QR3 />} />
        <Route path="/7dg4" element={<QR4 />} />
        <Route path="/j5kj" element={<QR5 />} />
        <Route path="/lsg6" element={<QR6 />} />
        <Route path="/ja7u" element={<QR7 />} />
        <Route path="/dev8" element={<QR8 />} />
        <Route path="/nou9" element={<QR9 />} />
        <Route path="/la10" element={<QR10 />} />
        <Route path="/w7t3" element={<Rickroll />} />
        {/* <Route path="/nocheat" element={<NoCheat />} /> */}
        <Route path="/" element={<Start />} />
      </Routes>
    </Router>
  );
}

// some change

export default App;

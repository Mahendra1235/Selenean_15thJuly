import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Semiconductor from "./Pages/Semiconductor";
import Embedded from "./Pages/Embedded";
import SustainableDigitalSolutions from "./Pages/SustainableDigitalSolutions";
import About from "./Components/About";
import Partners from "./Pages/Partners";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semiconductor" element={<Semiconductor />} />
        <Route path="/embedded" element={<Embedded />} />
        <Route path="/sds" element={<SustainableDigitalSolutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

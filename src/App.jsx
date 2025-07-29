import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import Academics from "./components/pages/academics/Academics";
import Admissions from "./components/pages/admissions/Admissions";
import Contact from "./components/pages/contact/Contact";
import Events from "./components/pages/events/Events";
import Home from "./components/pages/home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

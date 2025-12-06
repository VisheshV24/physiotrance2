import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllServices from "./components/AllServices";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Stats />
              <Process />
              <CTA />
              <Contact />
            </>
          }
        />

        <Route path="/all-services" element={<AllServices />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

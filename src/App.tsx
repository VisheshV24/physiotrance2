import Navbar from './components/Navbar';
import Hero from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

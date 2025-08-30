import Header from './components/Header';
import ModernHero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Alliances from './components/Alliances';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ModernHero />
        <About />
        <Team />
        <Services />
        <Gallery />
        <Alliances />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

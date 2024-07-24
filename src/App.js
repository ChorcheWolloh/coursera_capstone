import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HeroSection from './components/HeroSection.js';
import Specials from './components/Specials.js';
import Testimonials  from './components/Testimonials.js';
import About from './components/About.js';

function App() {
  return (
    <section className="App">
      <Header/>
      <main>
        <HeroSection/>
        <Specials/>
        <Testimonials/>
        <About/>
      </main>
      <Footer/>
    </section>
  );
}

export default App;

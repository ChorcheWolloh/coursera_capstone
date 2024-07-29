import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import BookingPage from './components/BookingPage.js';
import About from './components/About.js';

function App() {
  return (
    <Router>
      <section className="App">
        <Header/>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/BookingPage" element={<BookingPage/>} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer/>
      </section>
    </Router>
  );

}

export default App;

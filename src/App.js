import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Works from './components/Works';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Download from './components/Download';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Home />
        <Features />
        <Works />
        <Team />
        <Testimonials />
        <Download />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './Pages/home/Home';
import Gallery from './Pages/gallery/Gallery';
import Pricing from './Pages/pricing/Pricing';
import ContactUs from './Pages/contact/ContactUs';
import AboutUs from './Pages/about/AboutUs';
import RestroScans from './components/restroscans/RestroScans';

function App() {
  return (
    <>
     <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/restroscans" element={<RestroScans />} />
          </Routes>
        </div>
        <div className='app-footer'><Footer /></div>
      </div>
    </Router>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer';
import Flavors from './Components/Flavors/Flavors';
import Home from './Components/HomePage/Home';
import Capabilities from './Components/Capabilities/Capabilities';
import Design from './Components/Capabilities/Design';
import Production from './Components/Capabilities/Production';
import Certification from './Components/Capabilities/Certification';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/AboutUs';
import FlavorsList from './Components/Flavors/FlavorsList';
import CompanyInfo from './Components/CompanyInfo/CompanyInfo'

function App() {
  return (
    <div className="main_container">
      <CompanyInfo/>
     <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/capabilities" element={<Capabilities />}></Route>
        <Route path="/certification" element={<Certification/>}></Route>
        <Route path="/production" element={<Production/>}></Route>
        <Route path="/design" element={<Design/>}></Route>
        <Route path="/flavors" element={<Flavors />}></Route>
        <Route path='/flavors/:id' element={<FlavorsList/>}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

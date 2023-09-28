import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import Capabilities from "./Components/Capabilities/Capabilities";
import Flavors from "./Components/Flavors/Flavors";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer/Footer";
import Certification from "./Components/Capabilities/Certification";
import Production from "./Components/Capabilities/Production";
import Design from "./Components/Capabilities/Design";
import FlavorsList from "./Components/Flavors/FlavorsList";
import Navigation from "./Components/Navigation/Navigation";
import CompanyInfo from "./Components/CompanyInfo/CompanyInfo";
import "./css/media.css";

function App() {
  return (
    <div className="main_container">
      <CompanyInfo/>
   <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/capabilities" element={<Capabilities />}></Route>
        <Route path="/flavors" element={<Flavors />}></Route>
        <Route path='/flavors/:id' element={<FlavorsList/>}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/capabilities/certification" element={<Certification/>}></Route>
        <Route path="/capabilities/production" element={<Production/>}></Route>
        <Route path="/capabilities/design" element={<Design/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

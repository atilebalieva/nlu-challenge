import { Link } from 'react-router-dom';
import './App.css';
import logo from "./images/logo.png";
import Footer from './Footer';

function App() {
  return (
    <div className='main-container'>
            <header className="header">
        <Link to="">
          {" "}
          <img src={logo} alt="Logo" />
        </Link>
        <nav className="navigation">
          <Link to="/capabilities" className="link">
            Capabilities
          </Link>
          <Link to="/flavors" className="link">
            Flavors
          </Link>
          <Link to="/about-us" className="link">
            About Us
          </Link>
          <Link to="/contact-us" className="link">
            Contact Us
          </Link>
        </nav>
      </header>

      <Footer/>
    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';
import './App.css';
import logo from "./images/logo.png";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;

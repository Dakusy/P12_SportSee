import "../css/Header.css"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Header() {
    return (
        <nav className="horizontal-nav">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo-image" className="logo" />
          </Link>
    
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Profil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Réglage
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Communauté
              </Link>
            </li>
          </ul>
        </nav>
      );
    }

export default Header;
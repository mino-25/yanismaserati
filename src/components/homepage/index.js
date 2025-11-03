import { Link } from 'react-scroll';
import './index.css';
import logotest from '../assets/logotest.png';

function Homepage() {
  return (
    <div className="homepage-container" id="home">
      <header>
        <nav>
          <ul className="nav-links">
            <li><Link to="home" smooth={true} duration={600} offset={-80} className="nav-link">Accueil</Link></li>
            <li><Link to="services" smooth={true} duration={600} offset={-80} className="nav-link">Services</Link></li>
            <li><Link to="car" smooth={true} duration={600} offset={-80} className="nav-link">Voiture</Link></li>
            <li><Link to="contact" smooth={true} duration={600} id='nav-reservation' className="nav-link">Réservation</Link></li>
          </ul>
        </nav>
      </header>

      <div className="logo">
        <h1>Maison du Voyage</h1>
        <h2>L’art du déplacement, le prestige de l’instant.</h2>
      </div>
    </div>
  );
}

export default Homepage;
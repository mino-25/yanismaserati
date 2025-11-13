import { Link } from 'react-scroll';
import './index.css';
import logotest from '../assets/logotest.png';

function Homepage() {
  return (
    <section className="homepage-container" id="home">
      <div className="hero-content">

        <h1 className="hero-title">Maison du Voyage</h1>
        <h2 className="hero-subtitle">L’art du déplacement, le prestige de l’instant.</h2>

        <Link to="about" smooth duration={600} className="hero-button">
          Découvrir nos destinations
        </Link>
      </div>
    </section>
  );
}

export default Homepage;

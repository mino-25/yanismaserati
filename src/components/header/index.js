import { Link } from "react-scroll";
import "./index.css";

function Header({ lang }) {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="nav-link"
            >
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={600}
              offset={-80}
              className="nav-link"
            >
              {lang === "fr" ? "Services" : "Services"}
            </Link>
          </li>
          <li>
            <Link
              to="car"
              smooth={true}
              duration={600}
              offset={-80}
              className="nav-link"
            >
              {lang === "fr" ? "Voiture" : "Car"}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              id="nav-reservation"
              className="nav-link"
            >
              {lang === "fr" ? "Réservation" : "Booking"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

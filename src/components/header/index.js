import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "./index.css";

function Header({ lang }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="home" smooth duration={600} offset={-80} spy activeClass="active" className="nav-link">
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>
          </li>
          <li>
            <Link to="services" smooth duration={600} offset={-80} spy activeClass="active" className="nav-link">
              {lang === "fr" ? "Services" : "Services"}
            </Link>
          </li>
          <li>
            <Link to="car" smooth duration={600} offset={-80} spy activeClass="active" className="nav-link">
              Voiture
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={600} offset={-80} spy activeClass="active" id="nav-reservation" className="nav-link">
              {lang === "fr" ? "Réservation" : "Booking"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

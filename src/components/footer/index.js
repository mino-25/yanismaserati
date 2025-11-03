import './index.css';

function Footer() {
  return (
    <footer>
        <div className="contact">
            <h3>Contact</h3>
            <p>Email: yanis@gmail.com</p>
            <p>Phone: 0908006</p>
            <p>Address: 123 Main St, City, Country</p>
        </div>
        <div className='nav-footer'>
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#car">Voiture</a></li>
            <li><a href="#contact">Reservation</a></li>
          </ul>
        </div>
        <a href="https://www.instagram.com/mino_production/" target='blank'><p id='copyright'> © 2025 Mino. All rights reserved.</p></a>
    </footer>
  )
}
export default Footer;
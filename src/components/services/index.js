import React from 'react';
import './index.css';
import mariage from '../assets/mariage.jpg';
import paris from '../assets/paris.jpg';
import partyparis from '../assets/partyparis.webp';

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-content">
        <h2>Une Expérience pour tous vos événements</h2>
        <h4>
          Mariages, soirées, anniversaires ou balades parisiennes — chaque occasion mérite une arrivée remarquable.
          Avec <span className="highlight">Maison du Voyage</span>, profitez d’un service sur mesure, discret et raffiné,
          pensé pour sublimer vos instants les plus importants.
        </h4>
      </div>

      <div className="services-images">
        <div className="services-image">
          <img src={mariage} alt="Mariage" />
          <div className="overlay">
            <div>
              <h3>Mariage</h3>
              <p className="image-subtext">Arrivée élégante et discrète pour votre cérémonie</p>
            </div>
          </div>
        </div>

        <div className="services-image">
          <img src={paris} alt="Visite de Paris" />
          <div className="overlay">
            <div>
              <h3>Visite Paris</h3>
              <p className="image-subtext">Découvrez Paris avec style et confort</p>
            </div>
          </div>
        </div>

        <div className="services-image">
          <img src={partyparis} alt="Fête à Paris" />
          <div className="overlay">
            <div>
              <h3>Fête</h3>
              <p className="image-subtext">Arrivée remarquée pour toutes vos soirées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

import React, { useCallback } from 'react'
import Car from '../assets/Sexy SUV.jpeg'
import './index.css'
import mariage from '../assets/mariage.jpg'
import paris from '../assets/paris.jpg'
import partyparis from '../assets/partyparis.webp'
import useEmblaCarousel from 'embla-carousel-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Services() {
    
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <div className="services" id='services'>
        <h2>Une Expérience pour tout vos évenements</h2>
        <h4>
          Mariages, soirées, anniversaires ou balades parisiennes — chaque occasion mérite une arrivée remarquable.
          Avec Maison du Voyage, profitez d’un service sur mesure, discret et raffiné, pensé pour sublimer vos instants les plus importants.
          Laissez-vous conduire, savourez l’instant : je m’occupe du reste.
        </h4>
        {/* <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide"><img src={mariage} alt="wedding" /></div>
              <div className="embla__slide"><img src={paris} alt="visit" /></div>
              <div className="embla__slide"><img src={partyparis} alt="party" /></div>
            </div>
          </div>
          <FontAwesomeIcon icon={faChevronLeft} style={{color: "#fafafa",}} onClick={scrollPrev}/>
          <FontAwesomeIcon icon={faChevronRight} style={{color: "#fafafa",}} onClick={scrollNext}/>
        </div> */}
        <div className='services-images'>
          <div className="services-image">
            <img src={mariage} alt="wedding" />
            <h3>Mariage</h3>
          </div>
          <div className="services-image">
            <img src={paris} alt="paris" />
            <h3>Visite Paris</h3>
          </div>
          <div className="services-image">
            <img src={partyparis} alt="party" />
            <h3>Fête</h3>
          </div>
          
        </div>
    </div>
  )
}

export default Services;
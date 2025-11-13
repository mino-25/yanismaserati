import './index.css'
import choice1 from '../assets/choice1.jpg'
import choice2 from '../assets/choice2.JPG'
import choice3 from '../assets/choice3.JPG'
import useEmblaCarousel from 'embla-carousel-react'




function CarDetails() {
    
  const [emblaRef] = useEmblaCarousel()
  return (
    <div className="car-detail" id='car'>
        <h2>La Maserati Quattroporte S Q4 – L’art italien du voyage</h2>
        <div className="car-presentation">
          <img src={choice1} alt="" />
          <h4>
            Plus qu’une voiture, c’est une signature.
            La Maserati Quattroporte S Q4 allie la noblesse du design italien à un confort incomparable. Sa présence sur la route évoque la puissance maîtrisée et la distinction pure.
            À bord, chaque trajet devient un instant suspendu : le temps ralentit, la ville s’efface, et ne subsiste que le plaisir du voyage.
            C’est cette expérience, à la fois luxueuse et apaisante, que je souhaite offrir à chacun de mes passagers.
          </h4>
          </div>
        <div className="car-citation">
          <h3>« Le niveau de luxe et de raffinement est exceptionnel. » Motorverso</h3>
          <h3>« Une alternative italienne au haut de gamme, élégante et de caractère. » MotorLegend</h3>
        </div>
        <img src={choice2} alt="" />
        <img src={choice3} alt="" />
        <div className="car-stats">
          <h3>Caractéristiques :</h3>
          <ul>
              <li>Intérieur en cuir</li>
              <li>Toit ouvrant panoramique</li>
              <li>Système audio haut de gamme</li>
              <li>Sièges chauffants et ventilés</li>
              <li>Navigation GPS intégrée</li>
              <li>Caméra de recul et capteurs de stationnement</li>
          </ul>
        </div>
    </div>
  )
}

export default CarDetails;
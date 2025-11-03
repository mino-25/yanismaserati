import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import Services from './components/services';
import CarDetails from './components/cardetails';
import Footer from './components/footer';
import ContactForm from './components/contact';
import TranslationButton from './components/TranslationButton';
function App() {
  return (
    <div className="App">
      <Homepage>  </Homepage>
      <Services> </Services>
      <CarDetails> </CarDetails>
      <ContactForm> </ContactForm>
      <Footer> </Footer>
      <TranslationButton />
    </div>
  );
}

export default App;

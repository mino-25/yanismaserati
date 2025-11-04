
import React, { useState } from "react";
import './App.css';
import Header from './components/header';
import Homepage from './components/homepage';
import Services from './components/services';
import CarDetails from './components/cardetails';
import Footer from './components/footer';
import ContactForm from './components/contact';
import TranslationButton from './components/TranslationButton';
function App() {

  const [lang, setLang] = useState("fr");

  return (
    <div className="App">
      <Header lang={lang}/>
      <Homepage>  </Homepage>
      <Services> </Services>
      <CarDetails> </CarDetails>
      <ContactForm> </ContactForm>
      <Footer> </Footer>
      <TranslationButton onLangChange={setLang}/>
    </div>
  );
}

export default App;

import React from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';
import TradingViewWidget from '../components/widget/TraddingViewWidget';

function Accueil() {
    return (
      <div>
        <Header/>
          <Main pageTitle="Page d'accueil" > 
          <p>
              Bienvenue sur Crypt'infos - Votre Portail d'Actualités sur les Cryptomonnaies <br/><br/>
              Êtes-vous passionné par l'univers en constante évolution des cryptomonnaies ? 
              Vous êtes au bon endroit ! Crypt'infos est votre source d'informations de confiance pour rester au courant des dernières nouvelles,
               tendances et développements passionnants dans le monde des actifs numériques.<br/><br/>
            </p>
            <h1>Cours des crypto-monnaies + test</h1>
            <TradingViewWidget/>
          </Main>
        <Footer/>
      </div>
     
    );
  }
  
  export default Accueil;

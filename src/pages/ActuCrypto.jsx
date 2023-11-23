import '../App.css';
import React from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';



function AppActu(props) {
    return (
      <div className="AppActu">
      <Header/>
      <Main pageTitle="Actus" > 
        
      </Main>
      <Footer/>
      </div>
    );
  }
  
  export default AppActu;
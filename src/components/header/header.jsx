import React from 'react'
import LogoHeader from '../../assets/logo_header_transparent.png';
import './header.css'

const Header = () => {
  return (
    <div>
      <header>
      
      <nav>
      
        <ul>
        <a href="/">
        <img src={LogoHeader} alt="LogoHeader" width={'100px'} />
        </a>
          <li><a href="/">Accueil</a></li>
          <li><a href="/apprendre">Qu'est ce que...?</a></li>
          <li><a href="/actus">Actualités Crypto</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header

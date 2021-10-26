import React from "react";

import './Footer.css'

function Footer() {
  return(
    <footer className='section footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__copyright'>&#169; 2021</p>
          <ul className='footer__links'>
            <li><a href='https://www.facebook.com/' className='footer__link'>Яндекс.Практикум</a></li>
            <li><a href='https://github.com/' className='footer__link'>GitHub</a></li>
            <li><a href='https://www.facebook.com/' className='footer__link'>Facebook</a></li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer;

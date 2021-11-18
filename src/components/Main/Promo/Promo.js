import React from "react";

import './Promo.css';
import landingLogo from '../../../images/text__COLOR_landing-logo.svg';

function Promo() {
  function handleClickButton() {
    document.querySelector('.about-project').scrollIntoView({behavior: "smooth"});
  }

  return (
    <section className='promo'>
      <img src={landingLogo} alt={'Логотип лэндинга'} className='promo__logo'/>
      <div className='promo__content'>
        <h1 className='promo__title'>Учебный проект студента факультета &#10;&#13; Веб&#8209;разработки.</h1>
        <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className='promo__button' onClick={handleClickButton}>Узнать больше</button>
      </div>
    </section>
  )
}

export default Promo;


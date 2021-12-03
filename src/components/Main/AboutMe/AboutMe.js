import React from "react";

import './AboutMe.css';
import photo from '../../../images/photo.jpeg';
import Portfolio from "./Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className='section about-me'>
      <h2 className='section-title about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <img src={photo} alt='Студент' className='about-me__photo'/>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Анастасия</h3>
          <h4 className='about-me__description'>Фронтенд-разработчик, 27 лет</h4>
          <p className='section-text about-me__text'>
            Я родилась и живу в Москве. Начинала карьеру в банковской сфере,
            затем попала в IT-среду и заинтересовалась разработкой. Нравится делать красивые,
            удобные и функциональные интерфейсы, поэтому выбрала Frontend.
          </p>
          <ul className='about-me__socials'>
            <li><a href='https://www.facebook.com/profile.php?id=100004359156977' className='about-me__link' rel="noreferrer"
                   target="_blank">Facebook</a></li>
            <li><a href='https://github.com/Anastasia-Belik' className='about-me__link' rel="noreferrer" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <Portfolio/>
    </section>
  )
}

export default AboutMe;

import React from "react";

import './AboutMe.css';
import photo from '../../../images/pic__COLOR_pic.png';
import Portfolio from "./Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className='section about-me'>
      <h2 className='section-title about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <img src={photo} alt='Студент' className='about-me__photo'/>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Виталий</h3>
          <h4 className='about-me__description'>Фронтенд-разработчик, 30 лет</h4>
          <p className='section-text about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className='about-me__socials'>
            <li><a href='https://www.facebook.com/' className='about-me__link' rel="noreferrer"
                   target="_blank">Facebook</a></li>
            <li><a href='https://github.com/' className='about-me__link' rel="noreferrer" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <Portfolio/>
    </section>
  )
}

export default AboutMe;

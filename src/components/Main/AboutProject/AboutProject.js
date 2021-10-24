import React from "react";

import './AboutProject.css';

function AboutProject () {
  return (
    <section className='section about-project'>
      <h2 className='section-title about-project__title'>О проекте</h2>
      <div className='about-project__container'>
        <div className='about-project__column'>
          <h3 className='about-project__column-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__column'>
          <h3 className='about-project__column-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className='about-project__timeline'>
          <p className='about-project__box about-project__box_color'>1 неделя</p>
          <p className='about-project__box'>4 недели</p>
          <p className='about-project__layer'>Back-end</p>
          <p className='about-project__layer'>Front-end</p>
        </div>
      </div>

    </section>
  )
}

export default AboutProject;

import React from "react";

import './Portfolio.css';

function Portfolio() {
  return(
    <div className='portfolio'>
      <h5 className='portfolio__title'>Портфолио</h5>
      <ul className='portfolio__links'>
        <li className='portfolio__item'><a href='/' className='portfolio__link'>Статичный сайт <span>↗</span></a></li>
        <li className='portfolio__item'><a href='/' className='portfolio__link'>Адаптивный сайт<span>↗</span></a></li>
        <li className='portfolio__item'><a href='/' className='portfolio__link'>Одностраничное приложение<span>↗</span></a></li>
      </ul>
    </div>
  )
}

export default Portfolio;

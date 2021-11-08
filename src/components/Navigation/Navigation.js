import React from "react";

import './Navigation.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

function Navigation() {
  const location = useLocation();

  return(
    <section className='navigation navigation_opened'>
      <div className='navigation__container'>
        <button className='navigation__close-icon'/>
        <nav className='navigation__list-container'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <Link to='/' className={`navigation__link ${(location.pathname === '/') && 'navigation__link_border'}`}>
                Главная
              </Link>
            </li>
            <li className='navigation__item'>
              <Link to='/movies' className={`navigation__link ${(location.pathname === '/movies') && 'navigation__link_border'}`}>
                Фильмы
              </Link>
            </li>
            <li className='navigation__item'>
              <Link to='/saved-movies' className={`navigation__link ${(location.pathname === '/saved-movies') && 'navigation__link_border'}`}>
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <Link to='/profile' className='header__profile navigation__profile'>
            Аккаунт
            <div className='header__icon-profile navigation__icon-profile'/>
          </Link>
        </nav>

      </div>
    </section>
  )
}

export default Navigation;

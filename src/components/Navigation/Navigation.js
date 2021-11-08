import React from "react";

import './Navigation.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import ProfileLink from "../ProfileLink/ProfileLink";

function Navigation() {
  const location = useLocation();

  return(
    <section className='navigation'>
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
          <ProfileLink isHeader={false}/>
        </nav>

      </div>
    </section>
  )
}

export default Navigation;

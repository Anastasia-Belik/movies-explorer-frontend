import React from "react";

import './Navigation.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import ProfileLink from "../ProfileLink/ProfileLink";

function Navigation(props) {
  const location = useLocation();

  return(
    <section className={`navigation ${props.isOpen ? 'navigation_opened' : ''}`}>
      <div className='navigation__container'>
        <button className='navigation__close-icon' onClick={props.onClose}/>
        <nav className='navigation__list-container'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <Link to='/' onClick={props.onClose} className={`navigation__link ${(location.pathname === '/') && 'navigation__link_border'}`}>
                Главная
              </Link>
            </li>
            <li className='navigation__item'>
              <Link to='/movies' onClick={props.onClose} className={`navigation__link ${(location.pathname === '/movies') && 'navigation__link_border'}`}>
                Фильмы
              </Link>
            </li>
            <li className='navigation__item'>
              <Link to='/saved-movies' onClick={props.onClose} className={`navigation__link ${(location.pathname === '/saved-movies') && 'navigation__link_border'}`}>
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <ProfileLink isHeader={false} onClose={props.onClose}/>
        </nav>

      </div>
    </section>
  )
}

export default Navigation;

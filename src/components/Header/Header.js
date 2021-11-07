import React from "react";
import { Link } from "react-router-dom";

import './Header.css'
import {useLocation} from "react-router";

function Header() {

  const isLogin = false;
  const location = useLocation();

  return (
    <header className={`section header ${(location.pathname === '/') && 'header_type_logout'}`}>
      <Link to='/'>
        <div className='logo' />
      </Link>
        <nav className={`header__navigation ${(location.pathname === '/') && 'header__navigation_location_main'}`}>
          { (location.pathname !== '/') &&
          <ul className='header__links'>
            <li>
              <Link to='/movies'
                    className={`header__link ${(location.pathname === '/movies') && 'header__link_bold'}`}>
                Фильмы
              </Link>
            </li>
            <li>
              <Link to='/saved-movies'
                    className={`header__link ${(location.pathname === '/saved-movies') && 'header__link_bold'}`}>
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          }
          { isLogin ?
            <>
              <Link to='/profile' className='header__profile'>
                Аккаунт
                <div className='header__icon-profile'/>
              </Link>
              <button className={`header__burgerButton ${(location.pathname === '/') && 'header__burgerButton_location_main'}`}/>
            </> :
            <ul className='header__links'>
              <li>
                <Link to='/' className='header__register'>
                  Регистрация
                </Link>
              </li>
              <li>
                <Link to='/' className='header__login'>
                  Войти
                </Link>
              </li>
            </ul> }
        </nav>
    </header>
  )
}

export default Header;

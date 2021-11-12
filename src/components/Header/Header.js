import React from "react";
import { Link } from "react-router-dom";

import './Header.css'
import {useLocation} from "react-router";
import ProfileLink from "../ProfileLink/ProfileLink";

function Header(props) {
  const location = useLocation();

  const isLogin = props.isLogin

  let headerClassNames;

  switch (location.pathname){
    case '/':
      headerClassNames = 'header header_location_main';
      break;
    case '/movies':
      headerClassNames = 'header';
      break;
    case '/saved-movies':
      headerClassNames = 'header';
      break;
    case '/profile':
      headerClassNames = 'header';
      break;
    default:
      headerClassNames = 'header header_hidden';
  }

  return (
    <header className={`section ${headerClassNames}`}>
      <Link to='/'>
        <div className='logo' />
      </Link>
        <nav className={`header__navigation ${(location.pathname === '/') && 'header__navigation_location_main'}`}>
          { (location.pathname !== '/') &&
          <ul className='header__links header__links_type_movies'>
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
              <ProfileLink isHeader={true}/>
              <button
                className={`header__burgerButton ${(location.pathname === '/') && 'header__burgerButton_location_main'}`}
                onClick={props.onBurgerButtonClick}
              />
            </> :
            <ul className='header__links header__links_type_auth'>
              <li>
                <Link to='/signup' className='header__register'>
                  Регистрация
                </Link>
              </li>
              <Link to='/signin' className='header__login'>
                <li>
                  Войти
                </li>
              </Link>
            </ul> }
        </nav>
    </header>
  )
}

export default Header;

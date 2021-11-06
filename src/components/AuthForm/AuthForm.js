import React from "react";

import './AuthForm.css'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

function AuthForm() {
  const location = useLocation();

  let title = '';
  let buttonText = '';
  let linkLabelText = '';
  let linkUrl = '';
  let linkText = '';

  if(location.pathname === '/signup') {
    title = 'Добро пожаловать!';
    buttonText = 'Зарегистрироваться';
    linkLabelText = 'Уже зарегистрированы?';
    linkUrl = '/signin';
    linkText = 'Войти';
  }

  if(location.pathname === '/signin') {
    title = 'Рады видеть!';
    buttonText = 'Войти';
    linkLabelText = 'Еще не зарегистрированы?';
    linkUrl = '/signup';
    linkText = 'Регистрация';
  }


  return(
    <section className='authform'>
      <Link to='/'>
        <div className='logo authform__logo' />
      </Link>
      <h1 className='authform__title'>{title}</h1>
      <form className='authform__form'>
        <fieldset className='authform__fieldset'>
          { (location.pathname === '/signup') &&
            <label className='authform__label'>
            Имя
            <input className='authform__input' type='text' value='Виталий' placeholder='Имя'/>
            <span className='authform__input-err'>Текст ошибки</span>
          </label> }
          <label className='authform__label'>
            Email
            <input className='authform__input' type='email' value='post@yandex.ru' placeholder='Email'/>
            <span className='authform__input-err'>Текст ошибки</span>
          </label>
          <label className='authform__label'>
            Пароль
            <input className='authform__input authform__input_err' type='password' value='12345' placeholder='Пароль'/>
            <span className='authform__input-err authform__input-err_active'>Текст ошибки</span>
          </label>
        </fieldset>
        <button className='authform__button' type='button'>{buttonText}</button>
      </form>
      <p className='authform__link-container'>
        {linkLabelText}&nbsp;
        <Link to={linkUrl} className='authform__link'>
          {linkText}
        </Link>
      </p>


    </section>
  )
}

export default AuthForm;

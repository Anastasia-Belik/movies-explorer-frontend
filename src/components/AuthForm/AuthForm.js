import React from "react";

import './AuthForm.css'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useFormWithValidation} from '../../utils/validation';

function AuthForm(props) {
  const location = useLocation();

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      switch (location.pathname) {
        case '/signup':
          props.onRegister(values);
          break;
        case '/signin':
          props.onLogin(values);
          break;
        default:
          props.onRegister(values);
      }
      resetForm();
    }
  }

  let title = '';
  let buttonText = '';
  let linkLabelText = '';
  let linkUrl = '';
  let linkText = '';

  if (location.pathname === '/signup') {
    title = 'Добро пожаловать!';
    buttonText = 'Зарегистрироваться';
    linkLabelText = 'Уже зарегистрированы?';
    linkUrl = '/signin';
    linkText = 'Войти';
  }

  if (location.pathname === '/signin') {
    title = 'Рады видеть!';
    buttonText = 'Войти';
    linkLabelText = 'Еще не зарегистрированы?';
    linkUrl = '/signup';
    linkText = 'Регистрация';
  }


  return (
    <section className='authform'>
      <Link to='/'>
        <div className='logo authform__logo'/>
      </Link>
      <h1 className='authform__title'>{title}</h1>
      <form className='authform__form' name='authForm' noValidate onSubmit={handleSubmit}>
        <fieldset className={`authform__fieldset ${(location.pathname === '/signin') && 'authform__fieldset_signin'}`}>

          {(location.pathname === '/signup') &&
          <label className='authform__label'>
            Имя
            <input className={`authform__input ${errors.nameInput && 'authform__input_err'}`}
                   type='text'
                   placeholder='Имя'
                   name='nameInput'
                   pattern='[a-zA-Zа-яА-ЯёЁ\s-]{2,30}'
                   value={values.nameInput || ''}
                   onChange={handleChange}
                   required
            />
            <span className={`authform__input-err ${errors.nameInput && 'authform__input-err_active'}`}>
              {errors.nameInput || 'текст ошибки'}
            </span>
          </label>}

          <label className='authform__label'>
            Email
            <input className={`authform__input ${errors.emailInput && 'authform__input_err'}`}
                   type='email'
                   placeholder='Email'
                   name='emailInput'
                   value={values.emailInput || ''}
                   onChange={handleChange}
                   required
            />
            <span className={`authform__input-err ${errors.emailInput && 'authform__input-err_active'}`}>
              {errors.emailInput || 'текст ошибки'}
            </span>
          </label>

          <label className='authform__label'>
            Пароль
            <input className={`authform__input ${errors.passwordInput && 'authform__input_err'}`}
                   type='password'
                   placeholder='Пароль'
                   name='passwordInput'
                   value={values.passwordInput || ''}
                   onChange={handleChange}
                   required
            />
            <span className={`authform__input-err ${errors.passwordInput && 'authform__input-err_active'}`}>
              {errors.passwordInput || 'текст ошибки'}
            </span>
          </label>
        </fieldset>

        <span className='authform__api-err'>{props.onError}</span>
        <button className={`authform__button ${!isValid && 'authform__button_inactiv'}`}
                type='submit'>{buttonText}</button>

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

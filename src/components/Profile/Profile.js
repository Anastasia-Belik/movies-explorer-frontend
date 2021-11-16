import React from "react";

import './Profile.css';
import {useFormWithValidation} from '../../utils/validation';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Preloader from "../Movies/Preloader/Preloader";

function Profile(props) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation();


  const currentUser = React.useContext(CurrentUserContext);

  const isChangedName = !values.nameInput ? false : currentUser.name !== values.nameInput;
  const isChangedEmail = !values.emailInput ? false : currentUser.email !== values.emailInput;

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid && (isChangedName || isChangedEmail)) {
      const name = values.nameInput || currentUser.name;
      const email = values.emailInput || currentUser.email;
      props.onUpdateProfile(name, email);
      resetForm();
    }
  }

  React.useEffect(() => {
    return () => {
      props.onResetErr();
    }
  }, []);

  return (
    <section className='profile'>
      <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
      {props.isLoading ? <Preloader/> :
        <>
          <form className='profile__form' onSubmit={handleSubmit}>
            <fieldset className='profile__fieldset'>
              <label className='profile__label'>
                Имя
                <input className='profile__input'
                       type='text'
                       name='nameInput'
                       pattern='[a-zA-Zа-яА-ЯёЁ\s-]{2,30}'
                       placeholder='Имя'
                       value={values.nameInput || currentUser.name}
                       onChange={handleChange}
                       required
                />
              </label>
              <label className='profile__label'>
                Email
                <input className='profile__input'
                       type='email'
                       name='emailInput'
                       pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                       value={values.emailInput || currentUser.email}
                       placeholder='Email'
                       onChange={handleChange}
                       required
                />
              </label>
            </fieldset>
            <span className={`profile__result ${(errors.nameInput || errors.emailInput || props.onApiRes) && `profile__result_type_err`}`}>
              {errors.nameInput || errors.emailInput ||  props.onApiRes || 'ошибка'}
            </span>
            <button className={`profile__button ${isValid && (isChangedName || isChangedEmail) && 'profile__button_type_active'}`} type='submit'>
              Редактировать
            </button>
          </form>
          <button className='profile__button profile__button_type_exit' onClick={props.onSignOut}>Выйти из аккаунта
          </button>
        </>
      }
    </section>
  )
}

export default Profile;

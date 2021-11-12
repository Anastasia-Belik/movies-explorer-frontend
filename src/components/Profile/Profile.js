import React from "react";

import './Profile.css';
import { useFormWithValidation } from '../../utils/validation';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile(props) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation();


  const currentUser = React.useContext(CurrentUserContext);
  const [currentName, setCurrentName] = React.useState('');
  const [currentEmail, setCurrentEmail] = React.useState('');
  const [resStatus, setResStatus] = React.useState('');

  const isUpdate = (currentName !== values.nameInput) && (currentEmail !== values.emailInput);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid && isUpdate) {
      const name = values.nameInput || currentName;
      const email = values.emailInput || currentEmail;
      props.onUpdateProfile(name, email);
      setCurrentName(name);
      setCurrentEmail(email);
      resetForm();
    }
  }

  React.useEffect(() => {
    setCurrentName(currentUser.name ?? '');
    setCurrentEmail(currentUser.email ?? '');
    setResStatus('');
  }, [currentUser]);

  return(
    <section className='profile'>
      <h1 className='profile__title'>{`Привет, ${currentName}!`}</h1>
      <form className='profile__form' onSubmit={handleSubmit}>
        <fieldset className='profile__fieldset'>
          <label className='profile__label'>
            Имя
            <input className='profile__input'
                   type='text'
                   name='nameInput'
                   pattern='[a-zA-Zа-яА-ЯёЁ\s-]{2,30}'
                   placeholder='Имя'
                   value={values.nameInput || currentName}
                   onChange={handleChange}
                   required
            />
          </label>
          <label className='profile__label'>
            Email
            <input className='profile__input'
                   type='email'
                   name='emailInput'
                   value={values.emailInput || currentEmail}
                   placeholder='Email'
                   onChange={handleChange}
                   required
            />
          </label>
        </fieldset>
        <span className={`profile__result
        ${(errors.nameInput || errors.emailInput || resStatus) && `profile__result_type_${resStatus}`}`}>
          {errors.nameInput || errors.emailInput || props.onError || props.onOk || 'текст ошибки'}
        </span>
        <button className={`profile__button ${isValid && isUpdate && 'profile__button_type_active'}`} type='submit'>
          Редактировать
        </button>
      </form>
      <button className='profile__button profile__button_type_exit' onClick={props.onSignOut}>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;

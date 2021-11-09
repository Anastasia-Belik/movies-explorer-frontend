import React from "react";

import './Profile.css';

function Profile() {
  return(
    <section className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile__form'>
        <fieldset className='profile__fieldset'>
          <label className='profile__label'>
            Имя
            <input className='profile__input' type='text' value='Виталий' placeholder='Имя'/>
          </label>
          <label className='profile__label'>
            Email
            <input className='profile__input' type='email' value='pochta@yandex.ru' placeholder='Email'/>
          </label>
        </fieldset>
        <button className='profile__button'>Редактировать</button>
      </form>
      <button className='profile__button profile__button_type_exit'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;

import React from "react";

import './SearchForm.css'

import { useFormWithValidation } from '../../../utils/validation';

function SearchForm() {

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    if (values['searchInput']) {
      resetForm();
    }
  }

  return(
    <section className='section search'>
      <form className='search__form' name='searchForm' noValidate onSubmit={handleSubmit}>
        <div className='search__main-container'>
          <fieldset className='search__fieldset'>
            <div className='search__icon'/>
            <input className='search__field'
                   id='search'
                   type='text'
                   placeholder='Фильм'
                   name='searchInput'
                   value={values.searchInput || ''}
                   onChange={handleChange}
                   required
            />
          </fieldset>
          <button className={`search__button ${!isValid && 'search__button_inactive'}`} type='submit'/>
        </div>
        <div className='search__switch-container'>
          <label className='search__switch'>
            <input type='checkbox'/>
            <span className='search__slider'/>
          </label>
          <span className='search__shortfilm'>Короткометражки</span>
        </div>
        </form>
      <p className={`search__input-error ${errors.searchInput && 'search__input-error_active'}`}>{errors.searchInput || 'текст ошибки'}</p>
    </section>
  )
}

export default SearchForm;

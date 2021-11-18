import React from "react";

import './SearchForm.css'

import {useFormWithValidation} from '../../../utils/validation';

function SearchForm(props) {

  const [searchValidationMessage, setSearchValidationMessage] = React.useState('');

  const {
    values,
    handleChange,
  } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    if (values['searchInput']) {
      props.onSearch(values['searchInput']);
      setSearchValidationMessage('');
    } else {
      setSearchValidationMessage('Нужно ввести ключевое слово');
    }
  }

  return (
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
            />
          </fieldset>
          <button className='search__button' type='submit'/>
        </div>
        <div className='search__switch-container'>
          <label className='search__switch'>
            <input type='checkbox' onClick={props.onCheckBoxClick}/>
            <span className='search__slider'/>
          </label>
          <span className='search__shortfilm'>Короткометражки</span>
        </div>
      </form>
      <p className={`search__input-error ${searchValidationMessage && 'search__input-error_active'}`}>
        {searchValidationMessage || 'текст ошибки'}
      </p>
    </section>
  )
}

export default SearchForm;

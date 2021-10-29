import React from "react";

import './SearchForm.css'


function SearchForm() {
  return(
    <section className='section search'>
      <form className='search__form'>
        <div className='search__main-container'>
          <fieldset className='search__fieldset'>
            <div className='search__icon'/>
            <input className='search__field' id='search' type='text' placeholder='Фильм'/>
          </fieldset>
          <button className='search__button' />
        </div>
        <div className='search__switch-container'>
          <label for='short-film' className='search__switch'>
            <input type='checkbox' id='short-film'/>
            <span className='search__slider'/>
          </label>
          <span className='search__shortfilm'>Короткометражки</span>
        </div>
        </form>
    </section>
  )
}

export default SearchForm;

import React from "react";

import './SearchForm.css'


function SearchForm() {
  return(
    <section className='section search'>
      <form className='search__form'>
        <fieldset className='search__fieldset'>
          <div className='search__icon'/>
          <input className='search__field' id='search' type='text' placeholder='Фильм'/>
        </fieldset>
        <button className='search__button' />
        <label for='short-film' className='search__switch'>
          <input type='checkbox' id='short-film'/>
          <span className="search__slider"/>
        </label>
        <span>Короткометражки</span>
        </form>
    </section>
  )
}

export default SearchForm;

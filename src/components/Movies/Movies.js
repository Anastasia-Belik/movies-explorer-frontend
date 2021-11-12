import React from "react";

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

import MockData from './mock-data.json';


function Movies() {
  return(
    <main>
      <SearchForm />
      <MoviesCardList cards={MockData}/>
    </main>
  )
}

export default Movies;

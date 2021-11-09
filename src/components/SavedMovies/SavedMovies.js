import React from "react";

import MockData from '../Movies/mock-data.json';
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";


function SavedMovies() {
  return(
    <main>
      <SearchForm />
      <MoviesCardList cards={MockData}/>
    </main>
  )
}

export default SavedMovies;

import React from "react";

import * as MoviesApi from '../../utils/MoviesApi';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

import MockData from './mock-data.json';


function Movies() {

  const [searchInput, setSearchInput] = React.useState();

  function onSearch(inputValue) {
    setSearchInput(inputValue);
  }

  React.useEffect(() => {
    if (searchInput) {
      MoviesApi.getMovies()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }
  , [searchInput]);

  return(
    <main>
      <SearchForm onSearch={onSearch}/>
      <MoviesCardList cards={MockData}/>
    </main>
  )
}

export default Movies;

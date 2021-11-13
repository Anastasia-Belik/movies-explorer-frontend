import React from "react";

import * as MoviesApi from '../../utils/MoviesApi';
import filterResult from "../../utils/filterResult";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";


function Movies() {

  const [searchInput, setSearchInput] = React.useState();
  const [searchResult, setSearchResult] = React.useState([]);

  function onSearch(inputValue) {
    setSearchInput(inputValue);
  }

  React.useEffect(() => {
    if (searchInput) {
      MoviesApi.getMovies()
        .then((res) => {
          const arr = filterResult(res, searchInput)
          setSearchResult(arr);
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
      <MoviesCardList cards={searchResult}/>
    </main>
  )
}

export default Movies;

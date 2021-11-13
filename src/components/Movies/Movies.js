import React from "react";

import * as MoviesApi from '../../utils/MoviesApi';
import filterResult from "../../utils/filterResult";
import filterDuration from "../../utils/filterDuration";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";


function Movies(props) {

  const [searchInput, setSearchInput] = React.useState();
  const [searchResult, setSearchResult] = React.useState([]);
  const [isCheckBoxActive, setIsCheckBoxActive] = React.useState(false);

  function onSearch(inputValue) {
    setSearchInput(inputValue);
  }

  function handleCheckBoxClick() {
    setIsCheckBoxActive(!isCheckBoxActive)
  }

  React.useEffect(() => {
    if (searchInput) {
      MoviesApi.getMovies()
        .then((res) => {
          const filteredResult = filterResult(res, searchInput);
          if(isCheckBoxActive){
            const filteredDuration = filterDuration(filteredResult, 41);
            setSearchResult(filteredDuration);
          } else {
            setSearchResult(filteredResult);
          }
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }
  , [searchInput]);

  return(
    <main>
      <SearchForm onSearch={onSearch} onCheckBoxClick={handleCheckBoxClick}/>
      <MoviesCardList cards={searchResult} onSave={props.onSave} onDelete={props.onDelete}/>
    </main>
  )
}

export default Movies;

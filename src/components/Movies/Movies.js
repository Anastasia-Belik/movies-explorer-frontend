import React from "react";

import * as MoviesApi from '../../utils/MoviesApi';
import filterResult from "../../utils/filterResult";
import filterDuration from "../../utils/filterDuration";
import checkSavedMovies from "../../utils/checkSavedMovies";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";


function Movies(props) {

  const [searchInput, setSearchInput] = React.useState();
  const [searchResult, setSearchResult] = React.useState([]);
  const [isCheckBoxActive, setIsCheckBoxActive] = React.useState(false);
  const [finalResult, setIsFinalResult] = React.useState([]);
  const [isNullResult, setIsNullResult] = React.useState(false);
  const [isServerError, setIsServerError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  function onSearch(inputValue) {
    setSearchInput(inputValue);
  }

  function handleCheckBoxClick() {
    setIsCheckBoxActive(!isCheckBoxActive)
  }

  React.useEffect(() => {
      if (searchInput) {
        setIsNullResult(false);
        setIsServerError(false);
        setIsLoading(true);
        MoviesApi.getMovies()
          .then((res) => {
            let filteredResult = filterResult(res, searchInput);
            if (isCheckBoxActive) {
              filteredResult = filterDuration(filteredResult, 41);
            }
            if (filteredResult.length === 0) {
              setIsNullResult(true);
            }
            localStorage.setItem('searchResult', JSON.stringify(filteredResult));
            setSearchResult(filteredResult);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsServerError(true);
            console.log(err);
          })
      }
    }
    , [isCheckBoxActive, searchInput]);


  React.useEffect(() => {
    const moviesFromStorage = JSON.parse(localStorage.getItem('searchResult'));
    if (moviesFromStorage) {
      setIsFinalResult(checkSavedMovies(moviesFromStorage, props.savedMovies))
    }
  }, [searchResult, props.savedMovies])

  return (
    <main>
      <SearchForm onSearch={onSearch} onCheckBoxClick={handleCheckBoxClick}/>
      {isLoading ?
        <Preloader/> :
        <MoviesCardList
          cards={finalResult || []}
          onSave={props.onSave}
          onDelete={props.onDelete}
          isNullResult={isNullResult}
          isServerError={isServerError}
        />}
    </main>
  )
}

export default Movies;

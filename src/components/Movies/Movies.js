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
  const [isLocalStorageUpdate, setIsLocalStorageUpdate] = React.useState(false);

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
  , [isCheckBoxActive, searchInput]);

  React.useEffect(() => {
    if(searchResult.length > 0) {
      localStorage.setItem('searchResult', JSON.stringify(searchResult));
      setIsLocalStorageUpdate(prev => !prev);
      console.log(JSON.parse(localStorage.getItem('searchResult')));
    }
  }, [searchResult], isLocalStorageUpdate)

  return(
    <main>
      <SearchForm onSearch={onSearch} onCheckBoxClick={handleCheckBoxClick}/>
      <MoviesCardList
        cards={JSON.parse(localStorage.getItem('searchResult')) || []}
        onSave={props.onSave}
        onDelete={props.onDelete}
      />
    </main>
  )
}

export default Movies;

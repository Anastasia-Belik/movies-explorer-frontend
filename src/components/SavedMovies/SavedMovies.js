import React from "react";


import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import filterResult from "../../utils/filterResult";
import filterDuration from "../../utils/filterDuration";
import Preloader from "../Movies/Preloader/Preloader";


function SavedMovies(props) {

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isCheckBoxActive, setIsCheckBoxActive] = React.useState(false);
  const [isNullResult, setIsNullResult] = React.useState(false);

  function handleCheckBoxClick() {
    setIsCheckBoxActive(!isCheckBoxActive)
  }

  function handleSearch(input) {
    setIsNullResult(false);
    let filteredResult = filterResult(props.data, input);
    if (isCheckBoxActive) {
      filteredResult = filterDuration(filteredResult, 41);
    }
    if (filteredResult.length === 0) {
      setIsNullResult(true);
    }
    setSavedMovies(filteredResult);
  }

  React.useEffect(() => {
    setSavedMovies(props.data)
  }, [props.data])

  return (
    <main>
      <SearchForm onSearch={handleSearch} onCheckBoxClick={handleCheckBoxClick}/>

      {props.isLoading ? <Preloader/> :
        <MoviesCardList cards={savedMovies} onDelete={props.onDelete} isNullResult={isNullResult}/>}
    </main>
  )
}

export default SavedMovies;

import React from "react";


import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import filterResult from "../../utils/filterResult";
import filterDuration from "../../utils/filterDuration";
import Preloader from "../Movies/Preloader/Preloader";


function SavedMovies(props) {

  const [searchInput, setSearchInput] = React.useState('');
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [finalResult, setFinalResult] = React.useState([]);
  const [isCheckBoxActive, setIsCheckBoxActive] = React.useState(false);
  const [isNullResult, setIsNullResult] = React.useState(false);

  function handleCheckBoxClick() {
    setIsCheckBoxActive(!isCheckBoxActive)
  }

  function handleSearch(inputValue) {
    setSearchInput(inputValue);
  }

  React.useEffect(() => {
    setSavedMovies(props.data)
  }, [props.data])

  React.useEffect(() => {
      if (searchInput) {
        setIsNullResult(false);

        let filteredResult = filterResult(props.data, searchInput);
        if (filteredResult.length === 0) {
          setIsNullResult(true);
        }
        setSavedMovies(filteredResult);
      }
    }
    , [searchInput, props.data]);

  React.useEffect(() => {
    if (isCheckBoxActive) {
      const shortMovies = filterDuration(savedMovies, 41);
      setFinalResult(shortMovies);
    } else {
      setFinalResult(savedMovies);
    }
  }, [isCheckBoxActive, savedMovies]);


  return (
    <main>
      <SearchForm onSearch={handleSearch} onCheckBoxClick={handleCheckBoxClick}/>

      {props.isLoading ? <Preloader/> :
        <MoviesCardList cards={finalResult} onDelete={props.onDelete} isNullResult={isNullResult}/>}
    </main>
  )
}

export default SavedMovies;

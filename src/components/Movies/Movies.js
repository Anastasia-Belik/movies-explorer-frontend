import React from "react";

import * as MoviesApi from '../../utils/MoviesApi';
import filterResult from "../../utils/filterResult";
import filterDuration from "../../utils/filterDuration";
import checkSavedMovies from "../../utils/checkSavedMovies";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";


function Movies(props) {

  const [searchInput, setSearchInput] = React.useState(''); // ключевое словов в инпуте
  const [searchResult, setSearchResult] = React.useState([]); // результаты поиска
  const [isCheckBoxActive, setIsCheckBoxActive] = React.useState(false); // активность чекбокса короткометражек
  const [finalResult, setFinalResult] = React.useState([]); // результат из локалстораджа проверенный на сохраненные фильмы
  const [isNullResult, setIsNullResult] = React.useState(false); // есть ли результаты поиска
  const [isServerError, setIsServerError] = React.useState(false); // есть ли ошибка сервера
  const [isLoading, setIsLoading] = React.useState(false); // загрузка данных с сервера
  const [visibleCards, setVisibleCards] = React.useState([]); //карточки, отображающиеся на странице
  const [visibleCardsQuantity, setVisibleCardsQuantity] = React.useState(0);
  const [additionalCardsQuantity, setAdditionalCardsQuantity] = React.useState(0);


  function handleCheckBoxClick() {
    setIsCheckBoxActive(!isCheckBoxActive)
  }

  function handleSearch(inputValue) {
    setSearchInput(inputValue);
  }

  function calculateScreenWidth() {
    const screenWidth = window.innerWidth;
    switch (true) {
      case screenWidth > 479 && screenWidth < 769:
        setVisibleCardsQuantity(8);
        setAdditionalCardsQuantity(2);
        break;
      case screenWidth < 480:
        setVisibleCardsQuantity(5);
        setAdditionalCardsQuantity(2);
        break;
      default:
        setVisibleCardsQuantity(12);
        setAdditionalCardsQuantity(3);
    }
  }

  function handleClickMoreButton() {
    setVisibleCardsQuantity(prev => prev + additionalCardsQuantity)
  }


  React.useEffect(() => {
    setVisibleCards(finalResult.slice(0, visibleCardsQuantity));
  }, [finalResult, visibleCardsQuantity]);


  React.useEffect(() => {
    calculateScreenWidth();
    window.addEventListener("resize", calculateScreenWidth);
    return () => {
      window.removeEventListener("resize", calculateScreenWidth);
    };
  }, []);


  React.useEffect(() => {
      if (searchInput) {
        setIsNullResult(false);
        setIsServerError(false);
        setIsLoading(true);
        MoviesApi.getMovies()
          .then((res) => {
            let filteredResult = filterResult(res, searchInput);
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
    , [searchInput]);

  React.useEffect(() => {
    const moviesFromStorage = JSON.parse(localStorage.getItem('searchResult'));

    if(moviesFromStorage){
      if (isCheckBoxActive) {
        const shortMovies = filterDuration(moviesFromStorage, 41);
        setFinalResult(checkSavedMovies(shortMovies, props.savedMovies));
      } else {
        setFinalResult(checkSavedMovies(moviesFromStorage, props.savedMovies));
      }
    }
  }, [isCheckBoxActive, searchResult, props.savedMovies]);


  return (
    <main>
      <SearchForm
        onSearch={handleSearch}
        onCheckBoxClick={handleCheckBoxClick}
      />
      {isLoading ?
        <Preloader/> :
        <MoviesCardList
          cards={visibleCards}
          onSave={props.onSave}
          onDelete={props.onDelete}
          isNullResult={isNullResult}
          isServerError={isServerError}
          onClickMoreButton={handleClickMoreButton}
          isShowMoreButton={visibleCards.length > 0 && visibleCards.length < finalResult.length}
        />}
    </main>
  )
}

export default Movies;

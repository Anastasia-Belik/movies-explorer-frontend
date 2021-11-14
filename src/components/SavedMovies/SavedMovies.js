import React from "react";


import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";


function SavedMovies(props) {

  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    setSavedMovies(props.data)
  }, [props.data])

  return(
    <main>
      <SearchForm />
      <MoviesCardList cards={savedMovies} onDelete={props.onDelete}/>
    </main>
  )
}

export default SavedMovies;

import React from "react";

import MockData from '../components/Movies/mock-data.json';
import SearchForm from "./Movies/SearchForm/SearchForm";
import MoviesCardList from "./Movies/MoviesCardList/MoviesCardList";
import Footer from "./Footer/Footer";


function SavedMovies() {
  return(
    <>
      <main>
        <SearchForm />
        <MoviesCardList cards={MockData}/>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;

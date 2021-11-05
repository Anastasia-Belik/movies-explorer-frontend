import React from "react";

import './Movies.css'
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

import MockData from './mock-data.json';


function Movies() {
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

export default Movies;

import React from "react";

import './Movies.css'
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCard from "./MoviesCard/MoviesCard";

function Movies() {
  return(
    <>
      <main>
        <SearchForm />
        <MoviesCard />
      </main>
      <Footer />
    </>
  )
}

export default Movies;

import React from "react";

import './Movies.css'
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return(
    <>
      <main>
        <SearchForm />
      </main>
      <Footer />
    </>
  )
}

export default Movies;

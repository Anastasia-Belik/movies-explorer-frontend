import React from "react";

import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return(
    <section className="section cards">
      {props.cards.map((card) => (
        <MoviesCard
          data={card}
          key={card.movieId}
        />
      ))}
    </section>
  )
}

export default MoviesCardList;

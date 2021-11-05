import React from "react";

import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return(
    <section className="section cards">
      <ul className="cards__list">
        {props.cards.map((card) => (
          <MoviesCard
            data={card}
            key={card.movieId}
          />
        ))}
      </ul>
      <div className='cards__button-container'>
        <button className='cards__button'>Еще</button>
      </div>
    </section>
  )
}

export default MoviesCardList;

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
      <p className="cards__no-result">По вашему запросу ничего не найдено, попробуйте еще раз</p>
      <p className="cards__server-error">Упс, на сайте что-то поломалось, подождите немного и попробуйте еще раз</p>
      <div className='cards__button-container'>
        <button className='cards__button'>Еще</button>
      </div>
    </section>
  )
}

export default MoviesCardList;

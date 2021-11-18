import React from "react";

import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router";

function MoviesCardList(props) {
  const location = useLocation();

  return (
    <section className="section cards">
      <ul className="cards__list">
        {props.cards.map((card) => (
          <MoviesCard
            data={card}
            key={card.nameRU}
            onSave={props.onSave}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
      {props.isNullResult &&
      <p className="cards__no-result">По вашему запросу ничего не найдено, попробуйте еще раз</p>}
      {props.isServerError &&
      <p className="cards__server-error">Упс, на сайте что-то поломалось, подождите немного и попробуйте еще раз</p>}
      <div className='cards__button-container'>
        <button
          className={`cards__button ${(location.pathname === '/movies') && props.isShowMoreButton  && 'cards__button_active'}`}
          type='button'
          onClick={props.onClickMoreButton}>
          Еще
        </button>
      </div>
    </section>
  )
}

export default MoviesCardList;

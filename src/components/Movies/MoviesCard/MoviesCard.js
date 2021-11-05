import React from "react";

import './MoviesCard.css';

function MoviesCard(props) {
  return(
    <div className='movies-card'>
      <div className='movies-card__header'>
        <div className='movies-card__info'>
          <h2 className='movies-card__name' title={props.data.name}>{props.data.name}</h2>
          <p className='movies-card__duration'>{props.data.duration}</p>
        </div>
        <button className='movies-card__icon movies-card__icon_type_notsaved' type='button'/>
      </div>
      <img className='movies-card__image' src={props.data.image} alt={props.data.name}/>
    </div>
  )
}

export default MoviesCard;

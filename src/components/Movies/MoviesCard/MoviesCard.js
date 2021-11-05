import React from "react";
import { useLocation } from "react-router";

import './MoviesCard.css';


function MoviesCard(props) {

  const location = useLocation();
  let isSaved = false;

  let saveButtonClassName;
  if(location.pathname === '/saved-movies') {
    saveButtonClassName = 'delete';
  } else {
    saveButtonClassName = isSaved ? 'saved' : 'notsaved';
  }


  return(
    <li className='movies-card'>
      <div className='movies-card__header'>
        <div className='movies-card__info'>
          <h2 className='movies-card__name' title={props.data.name}>{props.data.name}</h2>
          <p className='movies-card__duration'>{props.data.duration}</p>
        </div>
        <button
          className={`movies-card__icon movies-card__icon_type_${saveButtonClassName}`}
          type='button'
        />
      </div>
      <img className='movies-card__image' src={props.data.image} alt={props.data.name}/>
    </li>
  )
}

export default MoviesCard;

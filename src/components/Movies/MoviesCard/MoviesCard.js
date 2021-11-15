import React from "react";
import {useLocation} from "react-router";

import './MoviesCard.css';

function MoviesCard(props) {

  const location = useLocation();

  let saveButtonClassName;
  let imgLink

  if (location.pathname === '/saved-movies') {
    saveButtonClassName = 'delete';
    imgLink = props.data.image;
  } else {
    saveButtonClassName = props.data.isSaved ? 'saved' : 'notsaved';
    imgLink = `https://api.nomoreparties.co${props.data.image.url}`
  }

  const hour = Math.floor(props.data.duration / 60);
  const min = props.data.duration - hour * 60;


  function handleSaveButtonClick() {
    props.onSave(props.data);
  }

  function handleDeleteButtonClick() {
    props.onDelete(props.data._id)
  }


  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <a href={props.data.trailerLink} target='_blank' rel='noreferrer' className='movies-card__link'>
          <div className='movies-card__info'>
            <h2 className='movies-card__name' title={props.data.nameRU}>{props.data.nameRU}</h2>
            <p className='movies-card__duration'>{hour > 0 && `${hour}ч`} {min > 0 && `${min}м`}</p>
          </div>
        </a>
        <button
          className={`movies-card__icon movies-card__icon_type_${saveButtonClassName}`}
          type='button'
          onClick={props.data.isSaved ? handleDeleteButtonClick : handleSaveButtonClick}
        />
      </div>
      <a href={props.data.trailerLink} target='_blank' rel='noreferrer' className='movies-card__link'>
        <img className='movies-card__image' src={imgLink} alt={props.data.nameRU}/>
      </a>
    </li>
  )
}

export default React.memo(MoviesCard);

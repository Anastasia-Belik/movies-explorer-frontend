import React from "react";

import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  const [allCards, setAllCards] = React.useState([]);
  const [visibleCards, setVisibleCards] = React.useState([]);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  let maxVisibleCards;
  let additionalCards;

  switch (true) {
    case screenWidth > 1279:
      maxVisibleCards = 12;
      additionalCards = 3;
      break;
    case screenWidth > 479 && screenWidth < 769:
      maxVisibleCards = 8;
      additionalCards = 2;
      break;
    case screenWidth < 480:
      maxVisibleCards = 5;
      additionalCards = 2;
      break;
    default:
      maxVisibleCards = 12;
  }

  function handleClick() {
    setVisibleCards([...visibleCards, ...allCards.splice(0, additionalCards)])
  }

  React.useEffect(() => {
    setAllCards([...props.cards])
  }, [props.cards, maxVisibleCards]);

  React.useEffect(() => {
    setVisibleCards(allCards.splice(0, maxVisibleCards));
    function onResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", onResize);

  }, [allCards, maxVisibleCards]);


  return(
    <section className="section cards">
      <ul className="cards__list">
        {visibleCards.map((card) => (
          <MoviesCard
            data={card}
            key={card.id}
          />
        ))}
      </ul>
      <p className="cards__no-result">По вашему запросу ничего не найдено, попробуйте еще раз</p>
      <p className="cards__server-error">Упс, на сайте что-то поломалось, подождите немного и попробуйте еще раз</p>
      <div className='cards__button-container'>
        <button className={`cards__button ${allCards.length > 0 && 'cards__button_active'}`}
                type='button'
                onClick={handleClick}>
          Еще
        </button>
      </div>
    </section>
  )
}

export default MoviesCardList;

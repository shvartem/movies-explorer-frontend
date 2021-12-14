import './MoviesCard.css';

function MoviesCard(props) {
  const { card } = props;

  function getHoursAndMinutes(duration) {
    if (duration / 60 < 1) return '&{duration}м';
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  }

  return (
    <li className="movies__card card">
      <div className="card__info">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__duration">{getHoursAndMinutes(card.duration)}</p>
        <div className="card__like" />
      </div>
      <div className="card__image-container">
        <img src={`https://api.nomoreparties.co${card.image.url}`} alt="" className="card__image" />
      </div>
    </li>
  );
}

export default MoviesCard;

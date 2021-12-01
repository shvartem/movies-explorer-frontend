import './MoviesCard.css';

function MoviesCard(props) {
  const { card } = props;

  return (
    <li className="movies__card card">
      <div className="card__info">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__duration">{card.duration}</p>
        <div type="button" className="card__like" />
      </div>
      <img src={`https://api.nomoreparties.co${card.image.url}`} alt="" className="card__image" />
    </li>
  );
}

export default MoviesCard;

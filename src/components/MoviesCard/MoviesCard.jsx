import './MoviesCard.css';

const MoviesCard = (props) => {
    const { card, children } = props;

    function getHoursAndMinutes(duration) {
        if (duration / 60 < 1) return '&{duration}м';
        return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
    }

    return (
        <li className="movies__card card">
            <div className="card__info">
                <h2 className="card__title">{card.nameRU}</h2>
                <p className="card__duration">
                    {getHoursAndMinutes(card.duration)}
                </p>
                <button
                    type="button"
                    className="card__button button button_hover"
                >
                    {children}
                </button>
            </div>
            <div className="card__image-container">
                <img
                    src={`https://api.nomoreparties.co${card.image.url}`}
                    alt={`Постер фильма "${card.nameRU}"`}
                    className="card__image"
                />
            </div>
        </li>
    );
};

export default MoviesCard;

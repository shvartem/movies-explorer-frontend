import './MoviesCardList.css';

const MoviesCardList = (props) => {
    const { cards, component: Component } = props;

    if (cards.length === 0) {
        return (
            <div className="movies__not-found">
                <h2 className="movies__title">Не найдено ни одного фильма</h2>
            </div>
        );
    }
    return (
        <ul className="movies__card-list">
            {cards.map((card) => <Component key={card.id} card={card} />)}
        </ul>
    );
}

export default MoviesCardList;

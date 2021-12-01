import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const { cards } = props;

  return (
    <ul className="movies__card-list">
      {cards.map((card) => <MoviesCard key={card.id} card={card} />)}
    </ul>
  );
}

export default MoviesCardList;

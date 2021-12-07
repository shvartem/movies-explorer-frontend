import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies(props) {
  const { cards } = props;
  return (
    <section className="section movies">
      <div className="section__container section__container_wide movies__container">
        <SearchForm />
        <MoviesCardList cards={cards} />
        <div className="movies__more">
          <button type="button" className="movies__more-button">Ещё</button>
        </div>
      </div>
    </section>
  );
}

export default Movies;

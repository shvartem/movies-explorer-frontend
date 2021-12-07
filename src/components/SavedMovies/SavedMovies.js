import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
  const { savedCards } = props;

  return (
    <section className="section">
      <div className="section__container section__container_wide saved-movies__container">
        <SearchForm />
        <MoviesCardList cards={savedCards} />
      </div>
    </section>

  );
}

export default SavedMovies;

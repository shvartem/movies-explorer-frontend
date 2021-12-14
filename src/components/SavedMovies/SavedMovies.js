import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  const { savedCards } = props;

  const isLoading = false;

  return (
    <section className="section">
      <div className="section__container saved-movies__container">
        <SearchForm />
        {
          isLoading
            ? <Preloader />
            : (
              <MoviesCardList cards={savedCards} />
            )
        }
      </div>
    </section>

  );
}

export default SavedMovies;

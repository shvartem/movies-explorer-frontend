import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const { cards } = props;

  const isLoading = false;

  return (
    <section className="section movies">
      <div className="section__container movies__container">
        <SearchForm />
        {
          isLoading
            ? <Preloader />
            : (
              <>
                <MoviesCardList cards={cards} />
                <div className="movies__more">
                  <button type="button" className="movies__more-button">Ещё</button>
                </div>
              </>
            )
        }
      </div>
    </section>
  );
}

export default Movies;

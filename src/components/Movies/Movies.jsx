import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import FoundMoviesCard from '../FoundMoviesCard/FoundMoviesCard';

const Movies = (props) => {
    const { cards } = props;

    const isLoading = false;

    return (
        <main className="section movies">
            <div className="section__container movies__container">
                <SearchForm />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <>
                        <MoviesCardList
                            cards={cards}
                            component={FoundMoviesCard}
                        />
                        <div className="movies__more">
                            <button
                                type="button"
                                className="movies__more-button button button_hover"
                            >
                                Ещё
                            </button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
};

export default Movies;

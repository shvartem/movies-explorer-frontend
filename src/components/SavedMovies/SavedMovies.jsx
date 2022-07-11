import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

const SavedMovies = (props) => {
    const { savedCards } = props;

    const isLoading = false;

    return (
        <main className="section">
            <div className="section__container saved-movies__container">
                <SearchForm />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList
                        cards={savedCards}
                        component={SavedMoviesCard}
                    />
                )}
            </div>
        </main>
    );
};

export default SavedMovies;

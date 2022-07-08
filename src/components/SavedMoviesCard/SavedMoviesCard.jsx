import MoviesCard from '../MoviesCard/MoviesCard';
import deleteButton from '../../images/delete-button.svg';
import './SavedMoviesCard.css';

const SavedMoviesCard = props => {
    const { card } = props;

    return (
        <MoviesCard card={card}>
            <img src={deleteButton} alt="" className="card__delete" />
        </MoviesCard>
    );
};

export default SavedMoviesCard;

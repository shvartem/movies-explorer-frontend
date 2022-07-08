import MoviesCard from '../MoviesCard/MoviesCard';
import likeButton from '../../images/like.svg';
import './FoundMoviesCard.css';

const FoundMoviesCard = (props) => {
    const { card } = props;

    return (
        <MoviesCard card={card}>
            <img src={likeButton} alt="" className="card__like card__like_active" />
        </MoviesCard>
    );
}

export default FoundMoviesCard;

import './SearchForm.css';

const SearchForm = () => (
    <form action="/" className="movies-form">
        <div className="movies-form__wrapper">
            <input
                type="text"
                name="movieTitle"
                className="movies-form__item"
                placeholder="Фильм"
                required
            />
            <button
                type="submit"
                className="movies-form__button button button_hover"
            >
                Найти
            </button>
        </div>

        <label htmlFor="shortMovie" className="movies-form__label">
            <input
                type="checkbox"
                name="shortMovie"
                className="movies-form__item_checkbox"
                id="shortMovie"
            />
            <span className="movies-form__visible-checkbox">
                <span className="movies-form__checkbox-toggler" />
            </span>
            <span className="movies-form__label-text">Короткометражки</span>
        </label>
    </form>
);

export default SearchForm;

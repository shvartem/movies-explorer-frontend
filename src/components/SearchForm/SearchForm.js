import './SearchForm.css';

function SearchForm() {
  return (
    <form action="/" className="movies-form">
      <div className="movies-form__wrapper">
        <input
          type="text"
          name="movieTitle"
          className="movies-form__item"
          placeholder="Фильм"
        />
        <button type="submit" className="movies-form__button">Найти</button>
      </div>

      <label
        htmlFor="shortMovie"
        className="movies-form__label"
      >
        <input
          type="checkbox"
          name="shortMovie"
          className="movies-form__item_checkbox"
          id="shortMovie"
        />
        <span className="movies-form__visible-checkbox">
          <span className="movies-form__checkbox-toggler" />
        </span>
        Короткометражки
      </label>
    </form>
  );
}

export default SearchForm;

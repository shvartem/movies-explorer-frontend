import './NotFoundPage.css';

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-page__container">
        <h1 className="not-found-page__header">404</h1>
        <p className="not-found-page__paragraph">Страница не найдена</p>
        <button className="not-found-page__button button button_hover" type="button">Назад</button>
      </div>
    </section>
  );
}

export default NotFound;

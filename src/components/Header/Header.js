import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <section className="header">
      <div className="section__container section__container_wide header__container">
        <div className="header__left">
          <img src={logo} alt="Логотип сервиса Диплом" className="header__logo" />
          <button type="button" className="header__button">Фильмы</button>
          <button type="button" className="header__button">Сохранённые фильмы</button>
        </div>
        <div className="header__right">
          <button type="button" className="header__button">Регистрация</button>
          <button type="button" className="header__button header__button_last-of-type">Войти</button>
        </div>
      </div>
    </section>
  );
}

export default Header;

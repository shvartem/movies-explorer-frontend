import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';
// import accountButton from '../../images/account-button.svg';

function Header() {
  // const currentUser = true;

  return (
    <section className="header">
      <div className="section__container header__container">
        <Link to="/" className="header__link header__link_first-of-type">
          <img src={logo} alt="Логотип сервиса Диплом" className="header__logo" />
        </Link>
        <BurgerButton />
        <Navigation />

        {/* <div className="header__links"> */}
        {/*  <div className="header__left"> */}
        {/*    {currentUser &&
        <Link to="/movies" className="header__link">Фильмы</Link>} */}
        {/*    {currentUser &&
        <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>} */}
        {/*  </div> */}
        {/*  <div className="header__right"> */}
        {/*    {!currentUser &&
        <Link to="/signup" className="header__link">Регистрация</Link>} */}
        {/*    {!currentUser &&
        <Link to="/signin" className="header__link header__link_last-of-type">Войти</Link>} */}

        {/*    {currentUser && ( */}
        {/*    <Link to="/profile" className="navigation__account-link"> */}
        {/*      <span className="navigation__account-text">Аккаунт</span> */}
        {/*      <img src={accountButton} alt="" className="navigation__account-image" /> */}
        {/*    </Link> */}
        {/*    )} */}
        {/*  </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Header;

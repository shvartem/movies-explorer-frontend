import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import closeButton from '../../images/close-button.svg';
import accountButton from '../../images/account-button.svg';

function Navigation() {
  const currentUser = true;

  return (
    <div className="navigation">
      <div className="navigation__container">
        <button type="button" className="navigation__close">
          <img src={closeButton} alt="" className="navigation__close-image" />
        </button>
        <nav className="navigation__nav">
          <NavLink exact to="/" activeClassName="navigation__link_active" className="navigation__link navigation__link_type_main">Главная</NavLink>
          {currentUser && <NavLink to="/movies" activeClassName="navigation__link_active" className="navigation__link">Фильмы</NavLink>}
          {currentUser && <NavLink to="/saved-movies" activeClassName="navigation__link_active" className="navigation__link">Сохранённые фильмы</NavLink>}
        </nav>

        <div className="navigation__account">
          {currentUser && (
            <>
              <NavLink to="/profile" activeClassName="navigation__link_active navigation__link_type_active-account" className="navigation__link navigation__link_type_account">
                Аккаунт
              </NavLink>
              <Link to="/profile" className="navigation__account-image">
                <img src={accountButton} alt="" className="navigation__account-image" />
              </Link>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Navigation;

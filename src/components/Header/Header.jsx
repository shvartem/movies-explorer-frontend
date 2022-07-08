import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';

const Header = (props) => {
    const { backgroundColor, currentUser } = props;

    return (
        <header className="header" style={{ backgroundColor }}>
            <div className="section__container header__container">
                <Link to="/" className="header__link header__link_first-of-type link link_hover">
                    <img src={logo} alt="Логотип сервиса Диплом" className="header__logo" />
                </Link>
                {currentUser
                    ? (
                        <>
                            <BurgerButton />
                            <Navigation />
                        </>
                    )
                    : (
                        <div className="header__auth">
                            <Link to="/signup" className="header__link link link_hover">Регистрация</Link>
                            <Link
                                to="/signin"
                                className="header__link header__link_last-of-type link link_hover"
                            >
                                Войти
                            </Link>
                        </div>
                    )}
            </div>
        </header>
    );
}

export default Header;

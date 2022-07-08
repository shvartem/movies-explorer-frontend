import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';

const Auth = props => {
    const {
        authText,
        authLink,
        authLinkText,
        children,
        header,
        submitButtonText,
    } = props;

    return (
        <main className="section auth">
            <div className="auth__container">
                <img
                    src={logo}
                    alt="Логотип сервиса Диплом"
                    className="auth__logo"
                />
                <h1 className="auth__header">{header}</h1>
                <form className="auth__form auth-form">
                    <div className="auth-form__items">{children}</div>

                    <button
                        type="submit"
                        className="auth-form__button button button_hover"
                    >
                        {submitButtonText}
                    </button>
                </form>
                <p className="auth__text">
                    {authText}
                    <Link to={authLink} className="auth__link link link_hover">
                        {authLinkText}
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Auth;

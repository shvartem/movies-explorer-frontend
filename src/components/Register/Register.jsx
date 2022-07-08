import Auth from '../Auth/Auth';

const Register = () => (
    <Auth
        authText="Уже зарегистрированы?"
        authLink="/signin"
        authLinkText="Войти"
        header="Добро пожаловать!"
        submitButtonText="Зарегистрироваться"
    >
        <label className="auth-form__label" htmlFor="name">
            <span className="auth-form__label-text">Имя</span>
            <input id="name" type="text" className="auth-form__item" required />
            <span className="auth-form__error">Что-то пошло не так...</span>
        </label>

        <label className="auth-form__label" htmlFor="email">
            <span className="auth-form__label-text">E-mail</span>
            <input id="email" type="email" className="auth-form__item" required />
            <span className="auth-form__error">Что-то пошло не так...</span>
        </label>

        <label className="auth-form__label" htmlFor="password">
            <span className="auth-form__label-text">Пароль</span>
            <input id="password" type="password" className="auth-form__item auth-form__item-error" required />
            <span className="auth-form__error auth-form__error_active">Что-то пошло не так...</span>
        </label>
    </Auth>
);

export default Register;

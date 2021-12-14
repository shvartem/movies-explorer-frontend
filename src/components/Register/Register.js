import Auth from '../Auth/Auth';

function Register() {
  return (
    <Auth
      authText="Уже зарегистрированы?"
      authLink="/signup"
      authLinkText="Войти"
      header="Добро пожаловать!"
      submitButtonText="Зарегистрироваться"
    >
      <label className="auth-form__label">
        <span className="auth-form__label-text">Имя</span>
        <input type="text" className="auth-form__item" required />
        <span className="auth-form__error">Что-то пошло не так...</span>
      </label>

      <label className="auth-form__label">
        <span className="auth-form__label-text">E-mail</span>
        <input type="email" className="auth-form__item" required />
        <span className="auth-form__error">Что-то пошло не так...</span>
      </label>

      <label className="auth-form__label">
        <span className="auth-form__label-text">Пароль</span>
        <input type="password" className="auth-form__item auth-form__item-error" required />
        <span className="auth-form__error auth-form__error_active">Что-то пошло не так...</span>
      </label>
    </Auth>
  );
}

export default Register;

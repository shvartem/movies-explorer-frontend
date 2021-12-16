import Auth from '../Auth/Auth';

function Login() {
  return (
    <Auth
      authText="Ещё не зарегистрированы?"
      authLink="/signup"
      authLinkText="Регистрация"
      header="Рады видеть!"
      submitButtonText="Войти"
    >
      <label className="auth-form__label">
        <span className="auth-form__label-text">E-mail</span>
        <input type="email" className="auth-form__item" required />
        <span className="auth-form__error">Что-то пошло не так...</span>
      </label>

      <label className="auth-form__label">
        <span className="auth-form__label-text">Пароль</span>
        <input type="password" className="auth-form__item" required />
        <span className="auth-form__error auth-form__error_active">Что-то пошло не так...</span>
      </label>
    </Auth>
  );
}

export default Login;

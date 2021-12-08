// import { Link } from 'react-router-dom';
import './Login.css';
// import logo from '../../images/logo.svg';
import Auth from '../Auth/Auth';

function Login() {
  return (
  // <section className="section login">
  //   <div className="login__container">
  //     <img src={logo} alt="Логотип" className="login__logo" />
  //     <h1 className="login__header">Рады видеть!</h1>
  //     <form className="login__form login-form">
  //       <label className="login-form__label">
  //         <span className="login-form__label-text">E-mail</span>
  //         <input type="email" className="login-form__item" />
  //       </label>
  //
  //       <label className="login-form__label">
  //         <span className="login-form__label-text">Пароль</span>
  //         <input type="text" className="login-form__item" />
  //       </label>
  //
  //       <button type="submit" className="login-form__button">Войти</button>
  //     </form>
  //     <p className="login__text">
  //       Ещё не зарегистрированы?
  //       <Link to="/signup" className="login__link">Регистрация</Link>
  //     </p>
  //   </div>
  // </section>
    <Auth
      authText="Ещё не зарегистрированы?"
      authLink="/signin"
      authLinkText="Регистрация"
      header="Рады видеть!"
      submitButtonText="Войти"
    >
      <label className="auth-form__label">
        <span className="auth-form__label-text">E-mail</span>
        <input type="email" className="auth-form__item" />
      </label>

      <label className="auth-form__label">
        <span className="auth-form__label-text">Пароль</span>
        <input type="password" className="auth-form__item" />
      </label>
    </Auth>
  );
}

export default Login;

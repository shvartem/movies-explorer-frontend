// import { Link } from 'react-router-dom';
import './Register.css';
// import logo from '../../images/logo.svg';
import Auth from '../Auth/Auth';

function Register() {
  return (
    // <section className="section auth">
    //   <div className="auth__container">
    //     <img src={logo} alt="Логотип" className="auth__logo" />
    //     <h1 className="auth__header">Добро пожаловать!</h1>
    //     <form className="auth__form auth-form">
    //       <div className="auth-form__items">
    //         <label className="auth-form__label">
    //           <span className="auth-form__label-text">Имя</span>
    //           <input type="text" className="auth-form__item" />
    //         </label>
    //
    //         <label className="auth-form__label">
    //           <span className="auth-form__label-text">E-mail</span>
    //           <input type="email" className="auth-form__item" />
    //         </label>
    //
    //         <label className="auth-form__label">
    //           <span className="auth-form__label-text">Пароль</span>
    //           <input type="password" className="auth-form__item" />
    //         </label>
    //       </div>
    //
    //       <button type="submit" className="auth-form__button">Зарегистрироваться</button>
    //     </form>
    //     <p className="auth__text">
    //       Уже зарегистрированы?
    //       <Link to="/signup" className="auth__link">Войти</Link>
    //     </p>
    //   </div>
    // </section>
    <Auth
      authText="Уже зарегистрированы?"
      authLink="/signup"
      authLinkText="Войти"
      header="Добро пожаловать!"
      submitButtonText="Зарегистрироваться"
    >
      <label className="auth-form__label">
        <span className="auth-form__label-text">Имя</span>
        <input type="text" className="auth-form__item" />
      </label>

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

export default Register;

import './Profile.css';

function Profile() {
  const currentUser = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  };

  return (
    <section className="section profile">
      <h1 className="profile__header">{`Привет, ${currentUser.name}!`}</h1>
      <form className="profile__form form">
        <label className="form__label">
          <span className="form__label-text">Имя</span>
          <input type="text" className="form__item" />
        </label>
        <label className="form__label">
          <span className="form__label-text">E-mail</span>
          <input type="email" className="form__item" />
        </label>
        <button type="submit" className="form__button">Редактировать</button>
      </form>
      <button type="button" className="profile__logout">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;

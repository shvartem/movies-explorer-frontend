import './Profile.css';

const Profile = () => {
    const currentUser = {
        name: 'Виталий',
        email: 'pochta@yandex.ru',
    };

    return (
        <main className="section profile">
            <h1 className="profile__header">{`Привет, ${currentUser.name}!`}</h1>
            <form className="profile__form form">
                <label className="form__label" htmlFor="name">
                    <span className="form__label-text">Имя</span>
                    <input
                        id="name"
                        type="text"
                        className="form__item"
                        required
                    />
                </label>
                <label className="form__label" htmlFor="email">
                    <span className="form__label-text">E-mail</span>
                    <input
                        id="email"
                        type="email"
                        className="form__item"
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="form__button button button_hover"
                >
                    Редактировать
                </button>
            </form>
            <button
                type="button"
                className="profile__logout button button_hover"
            >
                Выйти из аккаунта
            </button>
        </main>
    );
};

export default Profile;

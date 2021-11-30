import './AboutMe.css';
import userPhoto from '../../images/user-photo.png';
// import portfolioArrow from '../../images/portfolio-arrow.svg';

function AboutMe() {
  return (
    <section className="section about-me">
      <div className="section__container about-me__container">
        <h3 className="section__header">Студент</h3>
        <div className="section__content about-me__content">
          <div className="about-me__info">
            <h2 className="about-me__header">Виталий</h2>
            <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__bio">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
              У&nbsp;меня есть жена и&nbsp;дочь.
              Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом.
              Недавно начал кодить. С&nbsp;2015 года работал
              в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке,
              начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <ul className="about-me__links-list">
              <li className="about-me__links-item">Facebook</li>
              <li className="about-me__links-item">Github</li>
            </ul>
            <img src={userPhoto} alt="" className="about-me__photo" />
          </div>
          <div className="about-me__portfolio portfolio">
            <h4 className="portfolio__header">Портфолио</h4>
            <ul className="portfolio__list">
              <li className="portfolio__item">
                <a className="portfolio__link" target="_blank" href="http://ya.ru" rel="noreferrer">
                  <p className="portfolio__paragraph">Статичный сайт</p>
                  <p className="portfolio__arrow">↗</p>
                  {/* <img className="portfolio__arrow" src={portfolioArrow} alt="" /> */}
                </a>
              </li>
              <li className="portfolio__item">
                <a className="portfolio__link" target="_blank" href="http://ya.ru" rel="noreferrer">
                  <p className="portfolio__paragraph">Адаптивный сайт</p>
                  <p className="portfolio__arrow">↗</p>
                  {/* <img className="portfolio__arrow" src={portfolioArrow} alt="" /> */}
                </a>
              </li>
              <li className="portfolio__item">
                <a className="portfolio__link" target="_blank" href="http://ya.ru" rel="noreferrer">
                  <p className="portfolio__paragraph">Одностраничное приложение</p>
                  <p className="portfolio__arrow">↗</p>
                  {/* <img className="portfolio__arrow" src={portfolioArrow} alt="" /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

import './Footer.css';

function Footer() {
  return (
    <section className="section footer">
      <div className="section__container footer__container">
        <div className="footer__content">
          <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info">
            <p className="footer__copyright">© 2020</p>
            <nav className="footer__navigation">
              <ul className="footer__navigation-list">
                <li className="footer__navigation-item">
                  <a href="https://practicum.yandex.ru/" target="_blank" className="footer__navigation-link" rel="noreferrer">Яндекс.Практикум</a>
                </li>
                <li className="footer__navigation-item">
                  <a href="https://github.com/" target="_blank" className="footer__navigation-link" rel="noreferrer">Github</a>
                </li>
                <li className="footer__navigation-item">
                  <a href="https://facebook.com/" target="_blank" className="footer__navigation-link" rel="noreferrer">Facebook</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

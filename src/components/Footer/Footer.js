import './Footer.css';

function Footer() {
  return (
    <section className="section footer">
      <div className="section__container section__container_wide footer__container">
        <div className="footer__content">
          <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info">
            <p className="footer__copyright">© 2020</p>
            <nav className="footer__navigation">
              <ul className="footer__navigation-list">
                <li className="footer__navigation-item">Яндекс.Практикум</li>
                <li className="footer__navigation-item">Github</li>
                <li className="footer__navigation-item">Facebook</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

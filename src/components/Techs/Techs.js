import './Techs.css';

function Techs() {
  return (
    <section className="section techs">
      <div className="section__container techs__container">
        <h2 className="section__header">Технологии</h2>
        <div className="section__content techs__content">
          <h2 className="techs__header">7 технологий</h2>
          <p className="techs__description">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном&nbsp;проекте.</p>
          <ul className="techs__list">
            <li className="techs__item">HTML</li>
            <li className="techs__item">CSS</li>
            <li className="techs__item">JS</li>
            <li className="techs__item">React</li>
            <li className="techs__item">Git</li>
            <li className="techs__item">Express.js</li>
            <li className="techs__item">mongoDB</li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default Techs;

import './AboutProject.css';

function AboutProject() {
  return (
    <section className="section about-project">
      <div className="section__container about-project__container">
        <h3 className="section__header">О проекте</h3>
        <div className="section__content about-project__content">
          <ul className="about-project__list">
            <li className="about-project__list-item">
              <h2 className="about-project__header">Дипломный проект включал 5 этапов</h2>
              <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </li>
            <li className="about-project__list-item">
              <h3 className="about-project__header">На выполнение диплома ушло 5 недель</h3>
              <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
          </ul>
          <div className="about-project__timeline timeline">
            <ul className="timeline-list">
              <li className="timeline-item">
                <p className="timeline-item__duration timeline-item__duration_green">1 неделя</p>
                <p className="timeline-item__description">Back-end</p>
              </li>
              <li className="timeline-item">
                <p className="timeline-item__duration">4 недели</p>
                <p className="timeline-item__description">Front-end</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;

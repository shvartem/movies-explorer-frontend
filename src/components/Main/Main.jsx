import './Main.css';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

const Main = () => (
    <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
    </main>
)

export default Main;

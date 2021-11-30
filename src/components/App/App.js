import './App.css';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App page">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/404">
          <NotFoundPage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

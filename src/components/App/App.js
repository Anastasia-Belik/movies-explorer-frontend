import './App.css';

import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Header from "../Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile/Profile";

function App() {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/404">
          <NotFoundPage />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

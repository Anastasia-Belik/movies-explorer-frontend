import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Header from "../Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function App() {

  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);

  function handleBurgerButtonClick(){
    setIsNavigationOpen(true);
  }

  function closeNavigationBar() {
    setIsNavigationOpen(false);
  }

  return (
    <div className="app">
      <Header onBurgerButtonClick={handleBurgerButtonClick}/>
      <Switch>
        <Route exact path="/">
          <Main />
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
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Navigation isOpen={isNavigationOpen} onClose={closeNavigationBar}/>
      <Footer />
    </div>
  );
}

export default App;

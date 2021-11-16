import './App.css';
import React from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

import * as MainApi from '../../utils/MainApi';
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {Redirect, useLocation} from "react-router";

function App() {

  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [apiMessage, setApiMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  function handleRegister(values) {

    const name = values.nameInput;
    const email = values.emailInput;
    const password = values.passwordInput;

    setIsLoading(true);

    MainApi.register(email, password, name)
      .then((res) => {
        if (res) {
          setApiMessage('');
          handleLogin(values);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setApiMessage(err);
      });
  }

  function handleLogin(values) {
    const email = values.emailInput;
    const password = values.passwordInput;

    setIsLoading(true);

    MainApi.authorize(email, password)
      .then((data) => {
          if (data.token) {
            setLoggedIn(true);
            setApiMessage('');
            history.push('/movies');
            setIsLoading(false)
          }
        }
      )
      .catch(err => {
        setIsLoading(false);
        setApiMessage(err)
      });
  }

  function handleUpdateProfile(name, email) {
    const token = localStorage.getItem('jwt');

    setIsLoading(true);
    MainApi.updateUserInfo(name, email, token)
      .then((res) => {
        setIsLoading(false);
        if (res) {
          setApiMessage('Изменения успешно внесены');
          setCurrentUser(res.data)
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setApiMessage(err);
      });
  }

  function resetErrMessage() {
    setApiMessage('');
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchResult');
    setLoggedIn(false);
    setApiMessage('');
    history.push('/');
  }

  function handleBurgerButtonClick() {
    setIsNavigationOpen(true);
  }

  function closeNavigationBar() {
    setIsNavigationOpen(false);
  }

  function handleSaveMovie(card) {
    const token = localStorage.getItem('jwt');
    setIsLoading(true);
    MainApi.saveMovie(card, token)
      .then((res) => {
        if (res) {
          MainApi.getSavedMovies(token)
            .then((res) => {
              setIsLoading(false);
              res.movies.forEach((movie) => {
                movie.isSaved = true;
              })
              setSavedMovies(res.movies);
            })
            .catch((err) => {
              setIsLoading(false);
              console.log(err);
            })
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  function handleDeleteMovie(id) {
    const token = localStorage.getItem('jwt');
    setIsLoading(true);
    MainApi.deleteMovie(id, token)
      .then((res) => {
        if (res) {
          setIsLoading(false);
          const idx = savedMovies.findIndex(el => el._id === id);
          setSavedMovies(prev => {
            const mutableSavedMovies = [...prev];
            mutableSavedMovies.splice(idx, 1);
            return mutableSavedMovies;
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      switch (location.pathname) {
        case '/': history.replace('/movies');
        break;
        case '/signup': history.replace('/movies');
          break;
        case '/signin': history.replace('/movies');
          break;
        default: history.replace(location.pathname);
      }

      const jwt = localStorage.getItem('jwt');

      setIsLoading(true);

      MainApi.getUserInfo(jwt)  //получение данных о юзере
        .then(data => {
          setIsLoading(false);
          setCurrentUser(data.data);
          setLoggedIn(true);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        })

      setIsLoading(true);

      MainApi.getSavedMovies(jwt)
        .then((res) => {
          setIsLoading(false);
          res.movies.forEach((movie) => {
            movie.isSaved = true;
          })
          setSavedMovies(res.movies);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        })
    }
  }, [loggedIn, history])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header onBurgerButtonClick={handleBurgerButtonClick} isLogin={loggedIn}/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            onSave={handleSaveMovie}
            onDelete={handleDeleteMovie}
            savedMovies={savedMovies}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            onDelete={handleDeleteMovie}
            data={savedMovies}
            isLoading={isLoading}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={handleSignOut}
            onUpdateProfile={handleUpdateProfile}
            onApiRes={apiMessage}
            isLoading={isLoading}
            onResetErr={resetErrMessage}
          />
          <Route exact path="/signin">
            <Login onLogin={handleLogin} onError={apiMessage} isLoading={isLoading}/>
          </Route>
          <Route exact path="/signup">
            <Register onRegister={handleRegister} onError={apiMessage} isLoading={isLoading}/>
          </Route>
          <Route path="*">
            <NotFoundPage/>
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
          </Route>
        </Switch>
        <Navigation isOpen={isNavigationOpen} onClose={closeNavigationBar}/>
        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

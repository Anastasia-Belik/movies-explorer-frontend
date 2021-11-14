import './App.css';
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

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

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [apiErrMessage, setApiErrMessage] = React.useState('');
  const [apiOkMessage, setApiOkMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  function handleRegister(values) {

    const name = values.nameInput;
    const email = values.emailInput;
    const password = values.passwordInput;

    MainApi.register(email, password, name)
      .then((res) => {
        if (res) {
          setApiErrMessage('');
          handleLogin(values);
        }
      })
      .catch((err) => {
        setApiErrMessage(err);
      });
  }

  function handleLogin(values) {
    const email = values.emailInput;
    const password = values.passwordInput;

    MainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {

          setLoggedIn(true);

          history.push('/movies');

          MainApi.getUserInfo(data.token)  //получение данных о юзере
            .then(data => {
              setCurrentUser(data.data);
            })
            .catch((err) => {
              console.log(err);
            })
          }
        }
      )
      .catch(err => setApiErrMessage(err));
  }

  function handleUpdateProfile(name, email) {
    const token = localStorage.getItem('jwt');

    MainApi.updateUserInfo(name, email, token)
      .then((res) => {
        if (res) {
          setApiOkMessage('Информация успешно обновлена')
          setApiErrMessage('');
          setCurrentUser(res.data)
        }
      })
      .catch((err) => {
        setApiErrMessage(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchResult');
    setLoggedIn(false);
    setApiErrMessage('');
    history.push('/');
  }

  function handleBurgerButtonClick(){
    setIsNavigationOpen(true);
  }

  function closeNavigationBar() {
    setIsNavigationOpen(false);
  }

  function handleSaveMovie(card){
    const token = localStorage.getItem('jwt');

    MainApi.saveMovie(card, token)
      .then((res) => {
        if (res) {
          MainApi.getSavedMovies(token)
            .then((res) => {
              res.movies.forEach((movie) => {
                movie.isSaved = true;
              })
              setSavedMovies(res.movies);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(id) { //здесь надо передавать ObjectId, который приходит от монго
    const token = localStorage.getItem('jwt');

    MainApi.deleteMovie(id, token)
      .then((res) => {
        if (res) {
          const idx = savedMovies.findIndex(el => el._id === id);
          setSavedMovies(prev => {
            prev.splice(idx, 1);
            return [...prev]
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        MainApi.getContent(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              history.push('/movies')
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [history])

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      MainApi.getUserInfo(jwt)  //получение данных о юзере
        .then(data => {
          setCurrentUser(data.data);
        })
        .catch((err) => {
          console.log(err);
        })
      MainApi.getSavedMovies(jwt)
        .then((res) => {
          res.movies.forEach((movie) => {
            movie.isSaved = true;
          })
          setSavedMovies(res.movies);
        })
        .catch((err) => {
          console.log(err);
        })

      console.log('отправляю какой-то запрос')
    }
  }, [history])

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <Header onBurgerButtonClick={handleBurgerButtonClick} isLogin={loggedIn}/>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signin">
          <Login onLogin={handleLogin} onError={apiErrMessage}/>
        </Route>
        <Route exact path="/signup">
          <Register onRegister={handleRegister} onError={apiErrMessage}/>
        </Route>

        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          onSave={handleSaveMovie}
          onDelete={handleDeleteMovie}
        />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          onDelete={handleDeleteMovie}
          data={savedMovies}
        />
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          onSignOut={handleSignOut}
          onUpdateProfile={handleUpdateProfile}
          onError={apiErrMessage}
          onOk={apiOkMessage}
        />
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Navigation isOpen={isNavigationOpen} onClose={closeNavigationBar}/>
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

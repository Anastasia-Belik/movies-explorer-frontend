import './App.css';

import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Header from "../Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

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
      </Switch>
    </div>
  );
}

export default App;

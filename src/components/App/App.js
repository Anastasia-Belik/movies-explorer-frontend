import './App.css';

import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

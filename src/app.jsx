import './app.module.css';
import React from 'react';
import SignIn from './components/user/signin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ FileInput, cardRepository, authService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn authService={authService}></SignIn>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/maker">
          <Maker
            FileInput={FileInput}
            cardRepository={cardRepository}
            authService={authService}
          ></Maker>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

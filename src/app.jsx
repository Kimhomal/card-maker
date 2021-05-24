import './app.css';
import React from 'react';
import SignIn from './components/user/signin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn authService={authService}></SignIn>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/maker">
          <Maker></Maker>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

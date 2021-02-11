import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import Contact from './components/Contact';
import Error from './components/Error';
import { User } from './components/User';

function App() {
  return (
    <>
      <Home />
      <Switch>
        <Route
          path="/"
            component={() =>
            <Home name="Home page" />
          }>
          Home
        </Route>
        <Route path="/about"   
        render={() =>
          <About name="about " />
        }
      > About </Route>
        <Route path="/services"   component={Services} > Services </Route>
        <Route path="/contact"   component={Contact} > Contact </Route>
        <Route path="/user/:fname/:lname"   component={User} > User </Route>
        {/* <Redirect to="/error" component={Error}></Redirect> */}
      </Switch>
    </>
  );
}

export default App;

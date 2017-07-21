import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom'
import Main from './Main.jsx';
import Header from './Header.jsx';
import Home from '../pages/Home/Home.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Main>
      </div>
    );
  }
}
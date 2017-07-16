import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom'
import Main from './Main.jsx';
import Header from './Header.jsx';
import Home from '../pages/Home/Home.jsx';
import Kpis from '../pages/Kpis/Kpis.jsx';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/kpis" component={Kpis} />
          </Switch>
        </Main>
      </div>
    );
  }
}
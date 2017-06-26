import React, {PureComponent} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main.jsx';
import Header from './Header.jsx';
import Home from '../module/Home.jsx';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main>
            <Route exact path="/" component={Home} />
          </Main>
        </div>
      </Router>
    );
  }
}
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends PureComponent {
    
render() {
  return (
			<header>
				<h1>WatchTower</h1>
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
					</ul>
				</nav>
			</header>
    );
  }
}
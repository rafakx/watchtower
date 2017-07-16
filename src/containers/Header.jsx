import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react'

export default class Main extends PureComponent {

	render() {
		return (
			<header>
				<h1>
					<Link to='/'>
						<Icon name='protect'/>
						WATCHTOWER
					</Link>
				</h1>
			</header>
    );
  }
}
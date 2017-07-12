import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react'

export default class Main extends PureComponent {

	render() {
		return (
			<header>
				<h1>
					<Icon name='protect'/>
					WATCHTOWER
				</h1>
			</header>
    );
  }
}
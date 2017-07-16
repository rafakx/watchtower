import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import semantic from 'semantic-ui-css/semantic.min.css';
import style from './index.sass';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
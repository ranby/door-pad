import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {Router, Route, hashHistory} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App} />
	</Router>
), document.getElementById('app'));
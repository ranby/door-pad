import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Settings from './components/Settings.jsx';
import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/settings" component={Settings} />
	</Router>
), document.getElementById('app'));
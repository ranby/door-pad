import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import About from './components/About.jsx'
import {Router, Route, hashHistory} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/about" component={About} />
	</Router>
), document.getElementById('app'));
import React from 'react';
import {Link, Router, Route} from 'react-router';

var NavBar = React.createClass ({
	render: function() {

		var navBarStyle = {
			width: 150,
			height: '100%',
			backgroundColor: '#515151',
			borderRight: '1px solid black',
			position: 'fixed'
		}

		var navBarLinkStyle = {
			color: 'white',
			textDecoration: 'none'
		}

		return (
			<div style={navBarStyle}>
				<ul role="nav">
					<p style={navBarLinkStyle}><Link style={navBarLinkStyle} to="/about">About</Link></p>
					<p style={navBarLinkStyle}>Contact</p>
				</ul>
			</div>
			);
	}
});
export default NavBar;
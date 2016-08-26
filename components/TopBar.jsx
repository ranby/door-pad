import React from 'react';
import { browserHistory } from 'react-router'
import logo from '../res/door_pad-logo.png';

var TopBar = React.createClass({
	getInitialState: function() {
		return {
			user: {
				name: 'Erik',
				email: 'erik.ranby@gmail.com'
			}
		}
	},

	handleRefreshClick: function() {
		console.log('refreshing...');
		location.reload();
	},

	handleSettingsClick: function() {
		console.log('go to settings');
		window.location.href = '/#/settings';
	},

	render: function() {
		var navBarStyle = {
			position: 'fixed',
			width: '100%',
			height: 50,
			backgroundColor: '#515151',
		}
		var navBarLogoStyle = {
			height: '65%',
			paddingLeft: 20,
			paddingTop: 10,
		}
		var navBarSettingsStyle = {
			cursor: 'pointer',
			height: 30,
			float: 'left',
			marginTop: 5,
			marginRight: 15,
		}
		var navBarRefreshStyle = {
			cursor: 'pointer',
			height: 30,
			float: 'left',
			marginTop: 5,
		}
		var navBarUserStyle = {
			float: 'right',
			height: 40,
			margin: 5,
			marginRight: 10,
		}
		var navBarUserNameStyle = {
			color: 'white',
			fontSize: 16,
			margin: '12px 15px',
			textTransform: 'uppercase',
			float: 'left',
		}
		var navBarUserPicStyle = {
			height: '100%',
			borderRadius: '50%',
		}
		var gravatarUrl = "http://www.gravatar.com/avatar/" + md5(this.state.user.email) + "?d=mm";
		return (
			<div style={navBarStyle}>
				<img style={navBarLogoStyle} src={logo} />
				<span style={navBarUserStyle}>
					<img src={require('../res/settings.svg')} style={navBarSettingsStyle} onClick={this.handleSettingsClick} />
					<img src={require('../res/refresh.svg')} style={navBarRefreshStyle} onClick={this.handleRefreshClick} />
					<span style={navBarUserNameStyle}>{this.state.user.name}</span>
					<img style={navBarUserPicStyle} src={gravatarUrl}/>
				</span>
			</div>
		)
	}
});
export default TopBar;
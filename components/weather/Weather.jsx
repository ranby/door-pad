import React from 'react';

var Weather = React.createClass ({
	getInitialState: function() {
		return {
			time: '-',
			temp: '-',
			wind: '-',
			pic: 'sun'
		}
	},

	componentDidMount: function() {
		var weatherUrl = "http://192.168.1.10:3000/weather/home/now"
		this.serverRequest = $.get(weatherUrl, function(result) {
			this.setState(result);
		}.bind(this));
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render: function() {
		var weatherStyle = {
			width: '49%',
			height: '50vh',
			float: 'right',
			backgroundColor: '#00B4FF',
			boxShadow: '-2px 0 3px #888888',
			borderRadius: 2,
			marginTop: 20,
		}
		var weatherPicStyle = {
			height: 120,
			width: 120,
			margin: '25px 35px',
			marginBottom: 10,
		}
		var weatherTempStyle = {
			margin: '0 55px',
			fontSize: 26,
		}
		var weatherWindStyle = {
			margin: '0 70px',
			fontSize: 16,
		}

		return (
			<div style={weatherStyle}>
				<img style={weatherPicStyle} src={'../../res/' + this.state.pic + '.svg'} />
				<p style={weatherTempStyle}>{this.state.temp} °C</p>
				<p style={weatherWindStyle}>{this.state.wind} m/s</p>
			</div>
		);
	}
});

export default Weather
import React from 'react';
import LargeWeatherDetails from './LargeWeatherDetails.jsx';
import SmallWeatherDetails from './SmallWeatherDetails.jsx';

var Weather = React.createClass ({
	getInitialState: function() {
		return {
			weather: [
			{
				pic: 'sun'
			},
			{
				pic: 'sun'
			},
			{
				pic: 'sun'
			},
			{
				pic: 'sun'
			}
			]
		}
	},

	componentDidMount: function() {
		var weatherUrl = "http://192.168.1.10:3000/weather/home"
		this.serverRequest = $.get(weatherUrl, function(result) {
			this.setState(result);
		}.bind(this));
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render: function() {
		var weatherStyle = {
			width: 390,
			height: 320,
			float: 'right',
			backgroundColor: '#00B4FF',
			boxShadow: '-2px 0 3px #888888',
			borderRadius: 2,
			marginTop: 20,
			padding: '0 30px',
		}
		var weatherNowStyle = {
			float: 'left',
			width: '55%',
			marginLeft: 0
		}
		var weatherHeaderStyle = {
			textAlign: 'center',
			marginLeft: 0,
			marginBottom: 12,
		}

		var weatherLaterContainerStyle = {
			float: 'right',
			width: '44%',
		}
		var weatherLaterStyle = {
			height: 90,
		}
		

		return (
			<div style={weatherStyle}>
				<div style={weatherNowStyle}>
					<h3 style={weatherHeaderStyle}>Now</h3>
					<LargeWeatherDetails weather={this.state.weather[0]} />
				</div>
				<div style={weatherLaterContainerStyle}>
					<h3 style={weatherHeaderStyle}>Later</h3>
					<div style={weatherLaterStyle}>
						<SmallWeatherDetails weather={this.state.weather[1]} />
					</div>
					<div style={weatherLaterStyle}>
						<SmallWeatherDetails weather={this.state.weather[2]} />
					</div>
					<div style={weatherLaterStyle}>
						<SmallWeatherDetails weather={this.state.weather[3]} />
					</div>
				</div>
			</div>
		);
	}
});

export default Weather
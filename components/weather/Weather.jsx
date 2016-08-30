import React from 'react';
import LargeWeatherDetails from './LargeWeatherDetails.jsx';
import SmallWeatherDetails from './SmallWeatherDetails.jsx';
import tempPic from '../../res/thermometer.svg';
import windPic from '../../res/wind-arrow.svg';

var Weather = React.createClass ({
	getInitialState: function() {
		var lat = 59.33;
		var lng = 18.06;
		var settings = JSON.parse(localStorage.getItem('settings'));
		if (settings != null) {
			lat = settings.lat;
			lng = settings.lng;
		}
		return {
			lat: lat,
			lng: lng,
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
		var weatherUrl = this.props.url + "weather/"+this.state.lat+"/"+this.state.lng;
		this.serverRequest = $.get(weatherUrl, function(result) {
			if (result.weather != null) {
				this.setState({weather: result.weather});
			}
		}.bind(this)).fail(function() {
			console.log("Could not retrieve weather for this location");
		});
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render: function() {
		var weatherStyle = {
			width: '100%',
			height: '47%',
			minHeight: 310,
			backgroundColor: '#00B4FF',
			boxShadow: '-2px 2px 3px #888888',
			borderRadius: 2,
			marginTop: 20,
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
			width: '39%',
			marginRight: 30,
		}
		var weatherLaterStyle = {
			height: 90,
		}

		return (
			<div style={weatherStyle}>
				<div style={weatherNowStyle}>
					<h3 style={weatherHeaderStyle}>Now</h3>
					<LargeWeatherDetails weather={this.state.weather[0]} tempPic={tempPic} windPic={windPic} />
				</div>
				<div style={weatherLaterContainerStyle}>
					<h3 style={weatherHeaderStyle}>Later</h3>
					<div style={weatherLaterStyle}>
						<SmallWeatherDetails weather={this.state.weather[1]} tempPic={tempPic} windPic={windPic} />
					</div>
					<div style={weatherLaterStyle}>
						<SmallWeatherDetails weather={this.state.weather[2]} tempPic={tempPic} windPic={windPic} />
					</div>
					<div style={weatherLaterStyle}>
						<SmallWeatherDetails weather={this.state.weather[3]} tempPic={tempPic} windPic={windPic} />
					</div>
				</div>
			</div>
		);
	}
});

export default Weather
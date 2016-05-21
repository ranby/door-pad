import React from 'react';

var Weather = React.createClass ({
	getInitialState: function() {
		return {
			time: '-',
			temp: '-',
			wind: '-',
			text: '-'
		}
	},

	parseWeatherJsonResponse: function(result) {
		alert("hej");
	},

	componentDidMount: function() {
		var smhiUrlHagalund = "http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/18.01141/lat/59.36251/data.json";
		this.serverRequest = $.get(smhiUrlHagalund, function(result) {
			var wsym = result.timeSeries[0].parameters[18].values[0];
			var wtext = '';
			if (wsym < 3) 
				wtext = 'sunny';
			else if (wsym < 8) 
				wtext = 'cloudy';
			else if (wsym === 11 || wsym === 15)
				wtext = 'snowy'
			else 
				wtext = 'rainy'
			this.setState({
				time: result.timeSeries[0].validTime,
				temp: result.timeSeries[0].parameters[1].values[0],
				wind: result.timeSeries[0].parameters[4].values[0],
				text: wtext
			});
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
			borderRadius: 2
		}

		return (
			<div style={weatherStyle}>
				<p>Temp: {this.state.temp} °C</p>
				<p>Wind: {this.state.wind} m/s</p>
				<p>Forecast: {this.state.text}</p>
			</div>
		);
	}
});

export default Weather
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
		var smhiUrlHagalund = "http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/18.01141/lat/59.36251/data.json";
		this.serverRequest = $.get(smhiUrlHagalund, function(result) {
			var wsym = result.timeSeries[0].parameters[18].values[0];
			var wtext = '';
			if (wsym < 3) 
				wtext = 'sun';
			else if (wsym < 5)
				wtext = 'cloud-sun';
			else if (wsym < 8) 
				wtext = 'cloud';
			else if (wsym === 11 || wsym === 15)
				wtext = 'snow'
			else 
				wtext = 'rain'
			this.setState({
				time: result.timeSeries[0].validTime,
				temp: result.timeSeries[0].parameters[1].values[0],
				wind: result.timeSeries[0].parameters[4].values[0],
				pic: wtext
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
			borderRadius: 2,
			marginTop: 20,
		}
		var weatherPicStyle = {
			height: 120,
			width: 120,
			float: 'right',
			marginRight: 25,
		}

		return (
			<div style={weatherStyle}>
				<p>Temp: {this.state.temp} °C</p>
				<p>Wind: {this.state.wind} m/s</p>
				<img style={weatherPicStyle} src={'../../res/' + this.state.pic + '.svg'} />
			</div>
		);
	}
});

export default Weather
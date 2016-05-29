import React from 'react';

var LargeWeatherDetails = React.createClass ({
	render: function() {
		var weatherLargePicStyle = {
			height: 150,
			width: 150,
			marginTop: '25px 35px',
			marginTop: 15,
			marginBottom: 10,
		}
		var weatherLargeTempStyle = {
			marginLeft: 15,	
		}
		var weatherLargeTempPicStyle = {
			height: 26,
			marginBottom: -5,
		}
		var weatherLargeTempTextStyle = {
			fontSize: 26,
			margin: 0,
			display: 'inline',
		}
		var weatherLargeWindStyle = {
			marginLeft: 35,
		}
		var weatherLargeWindPicStyle = {
			height: 16,
			marginBottom: -3,
			WebkitTransform: 'rotate(' + this.props.weather.windDir + 'deg)',
			transform: 'rotate(' + this.props.weather.windDir + 'deg)',

		}
		var weatherLargeWindTextStyle = {
			fontSize: 16,
			display: 'inline',
			marginLeft: 5,
		}

		return (
			<div>
				<img style={weatherLargePicStyle} src={'../../res/' + this.props.weather.pic + '.svg'} />
				<div style={weatherLargeTempStyle}>
					<img style={weatherLargeTempPicStyle} src='../../res/thermometer.svg' />
					<p style={weatherLargeTempTextStyle}>{this.props.weather.temp} °C</p>
				</div>
				<div style={weatherLargeWindStyle}>
					<img style={weatherLargeWindPicStyle} src={'../../res/wind-arrow.svg'} />
					<p style={weatherLargeWindTextStyle}>{this.props.weather.windStr} m/s</p>
				</div>
			</div>
		)
	}
});

export default LargeWeatherDetails;
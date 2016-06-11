import React from 'react';

var LargeWeatherDetails = React.createClass ({
	render: function() {
		var weatherLargeStyle = {
			textAlign: 'center',
		}
		var weatherLargePicStyle = {
			height: 150,
			width: 150,
			marginTop: '25px 35px',
			marginTop: 15,
			marginBottom: 10,
		}
		var weatherLargeTempStyle = {
			
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
			<div style={weatherLargeStyle}>
				<img style={weatherLargePicStyle} src={require('../../res/' + this.props.weather.pic + '.svg')} />
				<div style={weatherLargeTempStyle}>
					<img style={weatherLargeTempPicStyle} src={this.props.tempPic} />
					<p style={weatherLargeTempTextStyle}>{this.props.weather.temp} °C</p>
				</div>
				<div style={weatherLargeWindStyle}>
					<img style={weatherLargeWindPicStyle} src={this.props.windPic} />
					<p style={weatherLargeWindTextStyle}>{this.props.weather.windStr} m/s</p>
				</div>
			</div>
		)
	}
});

export default LargeWeatherDetails;
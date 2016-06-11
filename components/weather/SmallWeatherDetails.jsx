import React from 'react';

var SmallWeatherDetails = React.createClass ({
	render: function() {
		var weatherSmallPicStyle = {
			height: 60,
			width: 60,
			marginLeft: 25,
			float: 'right',
		}
		var weatherSmallTimeStyle = {
			color: '#006B80',
			fontSize: 14,
			textDecoration: 'underline',
			margin: 0,
		}
		var weatherSmallTempStyle = {
			marginTop: 3,
			marginBottom: 0,
		}
		var weatherSmallTempPicStyle = {
			height: 14,
			marginBottom: -2
		}
		var weatherSmallTempTextStyle = {
			display: 'inline',
			fontSize: 16,
		}
		var weatherSmallWindStyle = {
			marginTop: 3,
			marginBottom: 0,
		}
		var weatherSmallWindPicStyle = {
			height: 14,
			marginBottom: -2,
			WebkitTransform: 'rotate(' + this.props.weather.windDir + 'deg)',
			transform: 'rotate(' + this.props.weather.windDir + 'deg)',
		}
		var weatherSmallWindTextStyle = {
			display: 'inline',
			fontSize: 14,
			marginLeft: 3,
		}

		return (
			<div>
				<img style={weatherSmallPicStyle} src={require('../../res/' + this.props.weather.pic + '.svg')} />
				<p style={weatherSmallTimeStyle}>{this.props.weather.time}</p>
				<div style={weatherSmallTempStyle}>
					<img style={weatherSmallTempPicStyle} src={this.props.tempPic} />
					<p style={weatherSmallTempTextStyle}>{this.props.weather.temp} °C</p>
				</div>
				<div style={weatherSmallWindStyle}>
					<img style={weatherSmallWindPicStyle} src={this.props.windPic} />
					<p style={weatherSmallWindTextStyle}>{this.props.weather.windStr} m/s</p>
				</div>
			</div>
		)
	}
});

export default SmallWeatherDetails;
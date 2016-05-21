import React from 'react';

var Commute = React.createClass ({
	getInitialState: function() {
		return {
			kolonnvagen: []
		}
	},

	componentDidMount: function() {
		var slUrlKolonnvagen = "http://api.sl.se/api2/realtimedepartures.json?key=afc1763d6441487799a1f516851632cc&siteid=3456&timewindow=60";
		this.serverRequest = $.get(slUrlKolonnvagen, function(result) {
			this.setState({
				kolonnvagen: result.ResponseData.Buses
			});
		}.bind(this));
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render: function() {
		var commuteStyle = {
			width: '50%',
			height: '100vh',
			float: 'left'
		}

		var commuteTableStyle = {
			width: '100%'
		}

		var rows = [];
		var key = 0;
		this.state.kolonnvagen.forEach(function(departure) {
			rows.push(
				<tr key={key++}>
					<td>{departure.LineNumber}</td>
					<td>{departure.Destination}</td>
					<td>{departure.DisplayTime}</td>
				</tr>
			);
		}.bind(this));
		return (
			<div style={commuteStyle}>
				<h3>Kolonnvägen</h3>
				<table style={commuteTableStyle}>
					<thead>
					<tr>
						<td>Bus Line</td>
						<td>Destination</td>
						<td>Time</td>
					</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
});

export default Commute
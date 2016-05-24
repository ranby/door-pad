import React from 'react';

var DEBUG = true;

var CommuteTimeTable = React.createClass ({
	getInitialState: function() {
		var sample = {
			departures: [
				{
					line: 515,
					destination: 'Sunbybergs Station',
					time: 'Nu',
					transportType: 'BUS'
				},
				{
					line: 515,
					destination: 'Odenplan',
					time: '3 min',
					transportType: 'BUS'
				},
				{
					line: 177,
					destination: 'Skärvik',
					time: '14 min',
					transportType: 'BLUE BUS'
				},
				{
					line: 38,
					destination: 'Märsta',
					time: '22 min',
					transportType: 'TRAIN'
				},
				{
					line: 176,
					destination: 'Mörby Station',
					time: '13:37',
					transportType: 'BLUE BUS'
				},
			]
		}
		return sample;
	},

	componentDidMount: function() {
		if (!DEBUG) {
			this.serverRequest = $.get(this.props.url, function(result) {
				this.setState(result);
			}.bind(this));
		}
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render: function() {
		var commuteTableStyle = {
			width: '100%'
		}
		var commuteRowStyle = {
			backgroundColor: '#EEEEEE',
			padding: 12,
			marginBottom: 12
		}
		var commuteCellStyle1 = {
			marginRight: 35,
    		padding: 4,
		}
		var commuteCellStyle1Red = {
			border: '2px solid red',
    		borderRadius: '50%',
		}
		var commuteCellStyle1Blue = {
			border: '2px solid blue',
    		borderRadius: '50%',
		}
		var commuteCellStyle1Grey = {
			border: '2px solid grey',
    		borderRadius: 5,
		}
		var commuteCellStyle2 = {

		}
		var commuteCellStyle3 = {
			float: 'right'
		}

		var rows = [];
		for (var i = 0; i < 5 && i != this.state.departures.length; i++) {
			var departure = this.state.departures[i];
			var borderColorClass = {};
			if (departure.transportType === 'TRAIN') borderColorClass = commuteCellStyle1Grey;
			else if (departure.transportType === 'BLUE BUS') borderColorClass = commuteCellStyle1Blue;
			else borderColorClass = commuteCellStyle1Red;
			rows.push(
				<div key={i} style={commuteRowStyle}>
					<span style={$.extend({}, commuteCellStyle1, borderColorClass)}>{departure.line}</span>
					<span style={commuteCellStyle2}>{departure.destination}</span>
					<span style={commuteCellStyle3}>{departure.time}</span>
				</div>
			);
		}
		return (
			<div>
				<div style={commuteTableStyle}>
					{rows}
				</div>
			</div>
		);
	}
});

export default CommuteTimeTable
import React from 'react';

var CommuteTimeTable = React.createClass ({
	getInitialState: function() {
		var sample = {
			kolonnvagen: [
				{
					LineNumber: 515,
					Destination: 'Sunbybergs Station',
					DisplayTime: 'Nu',
					TransportMode: 'BUS',
					GroupOfLine: null
				},
				{
					LineNumber: 515,
					Destination: 'Odenplan',
					DisplayTime: '2 min',
					TransportMode: 'BUS',
					GroupOfLine: null
				},
				{
					LineNumber: 176,
					Destination: 'Mörby Station',
					DisplayTime: '3 min',
					TransportMode: 'BUS',
					GroupOfLine: 'blåbuss'
				},
				{
					LineNumber: 177,
					Destination: 'Stenhamra',
					DisplayTime: '14 min',
					TransportMode: 'BUS',
					GroupOfLine: 'blåbuss'
				},
				{
					LineNumber: 38,
					Destination: 'Sunbybergs Station',
					DisplayTime: '14:47',
					TransportMode: 'TRAIN'
				},
			]
		}
		return sample;
	},

	componentDidMount: function() {
		this.serverRequest = $.get(this.props.slUrl, function(result) {
			if (this.props.slUrl.indexOf('3456') > -1) {
				this.setState({
				kolonnvagen: result.ResponseData.Buses
				});
			} else if (this.props.slUrl.indexOf('9509') > -1) {
				this.setState({
				kolonnvagen: result.ResponseData.Trains
				});
			}
		}.bind(this));
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
		var key = 0;
		this.state.kolonnvagen.forEach(function(departure) {
			var borderColorClass = {};
			if (departure.TransportMode === 'TRAIN') borderColorClass = commuteCellStyle1Grey;
			else if (departure.GroupOfLine === 'blåbuss') borderColorClass = commuteCellStyle1Blue;
			else borderColorClass = commuteCellStyle1Red;
			rows.push(
				<div key={key++} style={commuteRowStyle}>
					<span style={$.extend({}, commuteCellStyle1, borderColorClass)}>{departure.LineNumber}</span>
					<span style={commuteCellStyle2}>{departure.Destination}</span>
					<span style={commuteCellStyle3}>{departure.DisplayTime}</span>
				</div>
			);
		}.bind(this));
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
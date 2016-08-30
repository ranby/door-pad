import React from 'react';
import CommuteTimeTable from './CommuteTimeTable.jsx';

var Commute = React.createClass ({
	getInitialState: function() {
		var settings = JSON.parse(localStorage.getItem('settings'));
		if (settings != null) {
			return {
				stop1: settings.commuteStop1,
				stop2: settings.commuteStop2,
				stop1TransportType: settings.commuteStop1TransportType,
				stop2TransportType: settings.commuteStop2TransportType
			}
		}
		else {
			return {
				stop1: 'Gärdet',
				stop2: 'Rökubbsgatan',
				stop1TransportType: 'Metros',
				stop2TransportType: 'Buses',
			}
		}
	},

	render: function() {
		var commuteStyle = {
			width: '35%',
			height: '90vh',
			float: 'left',
			overflow: 'scroll',
		}

		return (
			<div style={commuteStyle}>
				<h3>{this.state.stop1TransportType} from {this.state.stop1}</h3>
				<CommuteTimeTable url={this.props.url + 'commute/'+this.state.stop1+'/'+this.state.stop1TransportType}/>
				<h3>{this.state.stop2TransportType} from {this.state.stop2}</h3>
				<CommuteTimeTable url={this.props.url + 'commute/'+this.state.stop2+'/'+this.state.stop2TransportType}/>
			</div>
			);
	}
});
export default Commute;
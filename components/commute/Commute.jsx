import React from 'react';
import CommuteTimeTable from './CommuteTimeTable.jsx';

var Commute = React.createClass ({
	getInitialState: function() {
		var settings = JSON.parse(localStorage.getItem('settings'));
		return {
			stop1: settings.commuteStop1,
			stop2: settings.commuteStop2,
			stop1TransportType: settings.commuteStop1TransportType,
			stop2TransportType: settings.commuteStop2TransportType,
			urlStop1: this.props.url + 'commute/'+settings.commuteStop1+'/'+settings.commuteStop1TransportType,
			urlStop2: this.props.url + 'commute/'+settings.commuteStop2+'/'+settings.commuteStop2TransportType
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
				<CommuteTimeTable url={this.state.urlStop1}/>
				<h3>{this.state.stop2TransportType} from {this.state.stop2}</h3>
				<CommuteTimeTable url={this.state.urlStop2}/>
			</div>
			);
	}
});
export default Commute;
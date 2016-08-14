import React from 'react';
import CommuteTimeTable from './CommuteTimeTable.jsx';

var Commute = React.createClass ({
	getInitialState: function() {
		return {
			urlRokubbsgatan: 'http://192.168.1.56:3000/commute/rökubbsgatan/Buses',
			urlGardet: 'http://192.168.1.56:3000/commute/gärdet/Metros'
		}
	},

	render: function() {
		var commuteStyle = {
			width: 320,
			height: '90vh',
			float: 'left',
			overflow: 'scroll',
		}

		return (
			<div style={commuteStyle}>
				<h3>Trains from Gärdet</h3>
				<CommuteTimeTable url={this.state.urlGardet}/>
				<h3>Buses from Rökubbsgatan</h3>
				<CommuteTimeTable url={this.state.urlRokubbsgatan}/>
			</div>
			);
	}
});
export default Commute;
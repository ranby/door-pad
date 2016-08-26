import React from 'react';
import CommuteTimeTable from './CommuteTimeTable.jsx';

var Commute = React.createClass ({
	getInitialState: function() {
		return {
			urlRokubbsgatan: this.props.url + 'commute/rökubbsgatan/Buses',
			urlGardet: this.props.url + 'commute/gärdet/Metros'
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
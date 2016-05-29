import React from 'react';
import CommuteTimeTable from './CommuteTimeTable.jsx';

var Commute = React.createClass ({
	getInitialState: function() {
		return {
			urlKolonnvagen: 'http://192.168.1.10:3000/commute/kolonnvagen',
			urlSolnastation: 'http://192.168.1.10:3000/commute/solnastation'
		}
	},

	render: function() {
		var commuteStyle = {
			width: 320,
			height: '100vh',
			float: 'left',
			overflow: 'scroll',
		}

		return (
			<div style={commuteStyle}>
				<h3>Trains from Solna Station</h3>
				<CommuteTimeTable url={this.state.urlSolnastation}/>
				<h3>Buses from Kolonnvägen</h3>
				<CommuteTimeTable url={this.state.urlKolonnvagen}/>
			</div>
			);
	}
});
export default Commute;
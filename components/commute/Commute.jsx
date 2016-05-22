import React from 'react';
import CommuteTimeTable from './CommuteTimeTable.jsx';

var Commute = React.createClass ({
	getInitialState: function() {
		return {
			slUrlKolonnvagen: 'http://api.sl.se/api2/realtimedepartures.json?key=afc1763d6441487799a1f516851632cc&siteid=3456&timewindow=60',
			slUrlSolnastation: 'http://api.sl.se/api2/realtimedepartures.json?key=afc1763d6441487799a1f516851632cc&siteid=9509&timewindow=60'
		}
	},

	render: function() {
		var commuteStyle = {
			width: '50%',
			height: '100vh',
			float: 'left',
			overflow: 'scroll',
		}

		return (
			<div style={commuteStyle}>
				<h3>Buses from Kolonnvägen</h3>
				<CommuteTimeTable slUrl={this.state.slUrlKolonnvagen}/>
				<h3>Trains from Solna Station</h3>
				<CommuteTimeTable slUrl={this.state.slUrlSolnastation}/>
			</div>
			);
	}
});
export default Commute;
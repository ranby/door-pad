import React from 'react';
import {Link, Router, Route} from 'react-router';
import TopBar from './TopBar.jsx';
import NavBar from './NavBar.jsx';
import Weather from './weather/Weather.jsx';
import Commute from './commute/Commute.jsx';
import RentalCar from './rentalcar/RentalCar.jsx';

var App = React.createClass ({
	render: function() {

		var mainContainerStyle = {
			height: '100%',
			padding: '50px 20px 0 20px',
			backgroundColor: 'white',
			overflow: 'visible'
		}

		var rightContainerStyle = {
			height: '90vh',
			width: '62%',
			float: 'right'
		}

		var apiUrl = 'http://192.168.1.56:3000/'

		return (
			<div>
				<TopBar/>
				<div style={mainContainerStyle}>
					<Commute url={apiUrl} />
					<div style={rightContainerStyle}>
						<Weather url={apiUrl} />
						<RentalCar url={apiUrl} />
					</div>
				</div>
			</div>
			);
	}
});
export default App;
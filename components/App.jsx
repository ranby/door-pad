import React from 'react';
import {Link, Router, Route} from 'react-router';
import NavBar from './NavBar.jsx';
import Weather from './weather/Weather.jsx';
import Commute from './commute/Commute.jsx';
import RentalCar from './rentalcar/RentalCar.jsx';

var App = React.createClass ({
	render: function() {

		var mainContainerStyle = {
			height: '100vh',
			padding: 25,
			backgroundColor: 'white'
		}

		return (
			<div>
				<div style={mainContainerStyle}>
					<Commute />
					<Weather />
					<RentalCar />
				</div>
			</div>
			);
	}
});
export default App;
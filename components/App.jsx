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
			height: 680,
			padding: '50px 15px 0 25px',
			backgroundColor: 'white',
			overflow: 'hidden'
		}

		var apiUrl = 'http://192.168.1.56:3000/'

		return (
			<div>
				<TopBar/>
				<div style={mainContainerStyle}>
					<Commute url={apiUrl} />
					<Weather url={apiUrl} />
					<RentalCar url={apiUrl} />
				</div>
			</div>
			);
	}
});
export default App;
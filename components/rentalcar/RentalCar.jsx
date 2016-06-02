import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

var RentalCar = React.createClass ({
	getInitialState: function() {
		return {
			cars: []
		}
	},
	componentDidMount: function() {
		var mapOtions = {
			center: {lat: 59.362524, lng: 18.018326},
          	zoom: 15,
          	disableDefaultUI: true,
		};
		var map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOtions);

		var car2goUrl = "http://192.168.1.10:3000/car2go/cars";
		this.serverRequest = $.get(car2goUrl, function(result) {
			this.setState(result);

			for (var i in this.state.cars) {
				var car = this.state.cars[i];
				// console.log("Creating marker");
				new google.maps.Marker({
				    position: {lat: car.lat, lng: car.lng},
				    map: map,
				    title: 'Hello World!'
				  });
			}
		}.bind(this));
	},
	render: function() {
		var rentalcarStyle = {
			width: 600,
			height: 320,
			float: 'right',
			backgroundColor: '#EEEEEE',
			boxShadow: '-2px 0 3px #888888',
			marginTop: 20,
		}

		return (
			<div style={rentalcarStyle}>
			</div>
		);
	}
});

export default RentalCar
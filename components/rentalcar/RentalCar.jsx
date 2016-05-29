import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

var RentalCar = React.createClass ({
	getInitialState: function() {
		return {
			map: ''
		}
	},
	componentDidMount: function() {
		var mapOtions = {
			center: {lat: 59.362524, lng: 18.018326},
          	zoom: 15,
          	disableDefaultUI: true,
		};
		map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOtions);
		this.setSate({map: map});
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
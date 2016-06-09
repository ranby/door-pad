import React from 'react';
import ReactDOM from 'react-dom';
import Update from 'react-addons-update'

var RentalCar = React.createClass ({
	getInitialState: function() {
		return {
			car2go: {},
			drivenow: {}
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
			var newCar2goState = Update(this.state, {
				car2go: {$set: result}
			});
			this.setState(newCar2goState);

			for (var i in this.state.car2go.cars) {
				var car = this.state.car2go.cars[i];
				// console.log("Creating marker");
				new google.maps.Marker({
				    position: {lat: car.lat, lng: car.lng},
				    map: map,
				    icon: '../../res/car2go-marker.png'
				  });
			}
		}.bind(this));

		var drivenowUrl = "http://192.168.1.10:3000/drivenow/cars";
		this.serverRequest2 = $.get(drivenowUrl, function(result) {
			var newDrivenowState = Update(this.state, {
				drivenow: {$set: result}
			});
			this.setState(newDrivenowState);

			for (var i in this.state.drivenow.cars) {
				var car = this.state.drivenow.cars[i];
				new google.maps.Marker({
					position: {lat: car.lat, lng: car.lng},
					map: map,
					icon: '../../res/drivenow-marker.png'
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
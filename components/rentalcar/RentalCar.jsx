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
			center: {lat: 59.345046, lng: 18.109319},
          	zoom: 15,
          	disableDefaultUI: true,
		};
		var map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOtions);

		var car2goUrl = this.props.url + "car2go/cars";
		this.serverRequest = $.get(car2goUrl, function(result) {
			var newCar2goState = Update(this.state, {
				car2go: {$set: result}
			});
			this.setState(newCar2goState);

			for (var i in this.state.car2go.cars) {
				var car = this.state.car2go.cars[i];
				// console.log("Creating marker");
				var marker = new google.maps.Marker({
				    position: {lat: car.lat, lng: car.lng},
				    map: map,
				    icon: '../../res/car2go-marker.png',
				    animation: google.maps.Animation.DROP
				  });
				var infoWindow = new google.maps.InfoWindow();
				var content = '<p>'+car.licensePlate+'</p>'+
					'<p>'+car.address+'</p>'+
					'<p>'+car.fuel+'%</p>';
				marker.addListener('click', (function(marker, content, infoWindow) {
					return function() {
						infoWindow.setContent(content);
						infoWindow.open(map, marker);
					};
				})(marker, content, infoWindow));
			}
		}.bind(this));

		var drivenowUrl = this.props.url + "drivenow/cars";
		this.serverRequest2 = $.get(drivenowUrl, function(result) {
			var newDrivenowState = Update(this.state, {
				drivenow: {$set: result}
			});
			this.setState(newDrivenowState);

			for (var i in this.state.drivenow.cars) {
				var car = this.state.drivenow.cars[i];
				var marker = new google.maps.Marker({
					position: {lat: car.lat, lng: car.lng},
					map: map,
					icon: '../../res/drivenow-marker.png',
					animation: google.maps.Animation.DROP
				});
				var infoWindow = new google.maps.InfoWindow();
				var content = '<p>'+car.licensePlate+'</p>'+
					'<p>'+car.model+'</p>'+
					'<p>'+car.fuel+'%</p>';
				marker.addListener('click', (function(marker, content, infoWindow) {
					return function() {
						infoWindow.setContent(content);
						infoWindow.open(map, marker);
					};
				})(marker, content, infoWindow));
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
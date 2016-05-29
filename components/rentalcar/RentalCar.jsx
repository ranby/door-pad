import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

var RentalCar = React.createClass ({
	getInitialState: function() {
		return {
			markers: [{
		      	position: {
		        lat: 25.0112183,
		        lng: 121.52067570000001,
		      	},
		      	key: `Taiwan`,
		      	defaultAnimation: 2,
	    	}]
		}
	},
	render: function() {
		var rentalcarStyle = {
			width: 450,
			height: 320,
			float: 'right',
			backgroundColor: '#EEEEEE',
			boxShadow: '-2px 0 3px #888888',
			marginTop: 20,
		}

		return (
			<GoogleMapLoader
        		containerElement={
	          		<div
	            		{...this.props}
	            		style={rentalcarStyle}
	          		/>
        		}
		        googleMapElement={
		          	<GoogleMap
			            ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
			            defaultZoom={16}
			            defaultCenter={{ lat: 59.362414, lng: 18.018337 }}
			            // onClick={::this.handleMapClick}
		          	>
		            {this.state.markers.map((marker, index) => {
		            //   	return (
			           //      <Marker
			           //        {...marker}
			           //        onRightclick={this.handleMarkerRightclick.bind(this, index)}
			           //      />
		            	// );
		            })}
		          	</GoogleMap>
		        }
	      	/>
		);
	}
});

export default RentalCar
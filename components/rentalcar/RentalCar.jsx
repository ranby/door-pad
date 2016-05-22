import React from 'react';

var RentalCar = React.createClass ({

	render: function() {
		var rentalcarStyle = {
			width: '49%',
			height: '50vh',
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
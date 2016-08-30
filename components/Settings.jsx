import React from 'react';
import TopBar from './TopBar.jsx';
import update from 'react-addons-update'

var Settings = React.createClass({
	getInitialState: function() {
		var settingsState = JSON.parse(localStorage.getItem('settings'));
		if (settingsState == null) {
			settingsState = {
				commuteStop1: '',
				commuteStop1TransportType: 'Buses',
				commuteStop2: '',
				commuteStop2TransportType: 'Buses',
				lat: 0,
				lng: 0,
			};
		}
		return settingsState
	},

	handleStop1Change: function(event) {
		this.setState({ commuteStop1: event.target.value });
	},
	handleStop1TypeChange: function(event) {
		this.setState({ commuteStop1TransportType: event.target.value})
	},
	handleStop2Change: function(event) {
		this.setState({ commuteStop2: event.target.value });
	},
	handleStop2TypeChange: function(event) {
		this.setState({ commuteStop2TransportType: event.target.value})
	},
	handleLngChange: function(event) {
		this.setState({lng: event.target.value});
	},
	handleLatChange: function(event) {
		this.setState({lat: event.target.value});
	},
	saveSettings: function() {
		localStorage.setItem('settings', JSON.stringify(this.state));
	},

	render: function() {
		var mainContainerStyle = {
			padding: '50px 20px 0 20px',

		}
		return (
			<div>
				<TopBar/>
				<div style={mainContainerStyle}>
					<h1> Settings </h1>
					<h3>Account</h3>
					<p>Latitude</p>
					<input type="text" value={this.state.lat} onChange={this.handleLatChange} />
					<p>Longitude</p>
					<input type="text" value={this.state.lng} onChange={this.handleLngChange} />

					<h3> Commute </h3>
					<p>Stop 1</p>
					<input type="text" value={this.state.commuteStop1} onChange={this.handleStop1Change} />
					<select value={this.state.commuteStop1TransportType} onChange={this.handleStop1TypeChange} >
						<option value='Buses'>Buses</option>
						<option value='Trains'>Trains</option>
						<option value='Metros'>Metros</option>
					</select>
					<p>Stop 2</p>
					<input type="text" value={this.state.commuteStop2} onChange={this.handleStop2Change} />
					<select value={this.state.commuteStop2TransportType} onChange={this.handleStop2TypeChange} >
						<option value='Buses'>Buses</option>
						<option value='Trains'>Trains</option>
						<option value='Metros'>Metros</option>
					</select>

					<button type="submit" onClick={this.saveSettings}>Save</button>
				</div>
			</div>
		)
	}
});
export default Settings;
import React, { Component } from 'react'
import AddFishForm from './AddFishForm'

export default class Inventory extends Component {
	send = () => {
		console.log('send');
		// sendMsg()
	}
	render() {
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				<AddFishForm addFish={this.props.addFish} />

				<button onClick={this.props.loadFishes}>Load Sample Fishes</button>
				<button onClick={this.send}>Send Message</button>
			</div>
		)
	}
}

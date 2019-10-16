import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from './../sample-fishes'

class App extends Component {
	state = {
		fishes: [],
		order: {}
	};
	addFish = (fish) => {
		console.log('Adding fish!!!');
		const fishes = {...this.state.fishes}
		fishes[`fish${Date.now()}`] = fish
		this.setState({fishes})
	}
	loadFishes = () => {
		alert("loading Samples!!!")
		this.setState({fishes: sampleFishes})

	}

	render() {
		return (
			<div className='catch-of-the-day'>
				<div className="menu">
					<Header tagline="Ka4an is Cool!"/>
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => {
							return <Fish key={key} fish={this.state.fishes[key]} />
						})}
					</ul>
				</div>
				<Order/>
				<Inventory 
					addFish={this.addFish} 
					loadFishes={this.loadFishes}
				/>
			</div>
		)
	}
}

export default App;

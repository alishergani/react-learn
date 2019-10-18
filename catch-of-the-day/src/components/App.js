import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from './../sample-fishes'
import { sendMsg, socket } from './../api'


class App extends Component {
	state = {
		fishes: [],
		order: {}
	};
	addFish = (fish) => {
		// const fishes = {...this.state.fishes}
		// fishes[`fish${Date.now()}`] = fish
		// this.setState({fishes})
		sendMsg(fish)
	}
	addToOrder = (key) => {
		const order = {...this.state.order}
		order[key] = order[key] + 1 || 1;
		this.setState({ order })

	} 
	loadFishes = () => {
		this.setState({fishes: sampleFishes})

	}
	componentDidMount() {
		socket.on('fishList', (data) => {
			this.setState({fishes: data})
		})
	}

	render() {
		return (
			<div className='catch-of-the-day'>
				<div className="menu">
					<Header tagline="Ka4an is Cool!"/>
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish key={key}
								  index={key} 
								  fish={this.state.fishes[key]}
								  addToOrder={this.addToOrder} />
						))}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory 
					addFish={this.addFish} 
					loadFishes={this.loadFishes}
				/>
			</div>
		)
	}
}

export default App;

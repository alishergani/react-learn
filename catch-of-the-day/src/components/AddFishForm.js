import React, { Component } from 'react'

export default class AddFishForm extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    statusRef = React.createRef();

    createFish = (e) => {
        e.preventDefault()
        const fish = {
            name: this.nameRef.current.value, 
            price: +this.priceRef.current.value, 
            desc: this.descRef.current.value, 
            image: this.imageRef.current.value, 
            status: this.statusRef.current.value
        }
        this.props.addFish(fish)
        e.currentTarget.reset()
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} name="name" placeholder="Name"/>   
                <input type="text" ref={this.priceRef} name="price" placeholder="Price"/>   
                <select name="status" ref={this.statusRef} id="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" ref={this.descRef} name="desc" placeholder="Desc"/>   
                <input type="text" ref={this.imageRef} name="image" placeholder="Image"/>
                <button type="submit">+ Add Fish</button>   
            </form>
        )
    }
}

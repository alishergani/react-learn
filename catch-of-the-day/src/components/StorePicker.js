import React from 'react'
import { getFunName } from "../helpers"
import axios from 'axios'

class StorePicker extends React.Component {
    storeInput = React.createRef();
    goToStore = (e) => {
        e.preventDefault()
        // this.props.history.push(`/store/${this.storeInput.current.value}`)
        axios.post('http://localhost:3333/auth', {
            name: this.storeInput.current.value
        }).then(res => {
            console.log(res);
            // this.props.history.push(`/store/${res.data}`)
        })

    }
    render() {
        return (  
            <form className="store-selector" onSubmit={this.goToStore}>
                {/* This is main Component for app  */}
                <h2>Please enter the Store</h2>
                <input type="text" 
                    required 
                    placeholder="Store Name"
                    ref={this.storeInput}
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;
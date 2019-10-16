import React from 'react'
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
    storeInput = React.createRef();
    goToStore = (e) => {
        e.preventDefault()
        this.props.history.push(`/store/${this.storeInput.current.value}`)
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
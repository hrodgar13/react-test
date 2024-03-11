import React, {Component} from "react";
import './input.css'
export default class Input extends Component {

    constructor() {
        super();

        this.state = {
            value: ''
        }
    }

    onSetValueToObj = (e) => {
        const value = e.target.value
        const id = this.props.id

        this.setState({value})
        this.props.setValueToObj({field: id, value})
    }

    render () {
        const {label, id, type = 'text'} = this.props

        return (
            <div className={'input-container'}>
                <input
                    id={id} type={type}
                    value={this.state.value}
                    onChange={this.onSetValueToObj}
                />
                <label htmlFor={id}> {label} </label>
            </div>
        )
    }
}
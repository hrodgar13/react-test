import React, {Component} from "react";
import './input.css'
export default class Input extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            isTouched: false
        }
    }

    onSetValueToObj = (e) => {
        const value = e.target.value
        const id = this.props.id


        this.setState({ value, isTouched: true });
        this.props.setValueToObj({ field: this.props.id, value, touched: true });
    }

    render () {
        const {label, id, type = 'text'} = this.props;
        const {value, isTouched} = this.state;

        const hasError = isTouched && !value;

        const errorClass = `input ${hasError ? 'error' : ''}`;

        return (
            <div className={'input-container'}>
                <input
                    id={id}
                    type={type}
                    value={this.state.value}
                    onChange={this.onSetValueToObj}
                    className={errorClass}
                />
                <label htmlFor={id} className={errorClass}> {label} </label>
            </div>
        )
    }
}
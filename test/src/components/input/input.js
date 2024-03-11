import React, {Component} from "react";
import './input.css'
export default class Input extends Component {

    constructor(props) {
        super(props);

        let initialValue = '';
        if (this.props.usePhoneMask) {
            initialValue = this.formatPhoneNumber('');
        }

        this.state = {
            value: initialValue,
            isTouched: false
        };
    }

    formatPhoneNumber = (value) => {
        let phoneNumber = value.replace(/[^\d]/g, '');
        let formattedNumber = '';

        for(let i = 0; i < 10; i++) {
            if (i === 0) formattedNumber += '(';
            if (i === 3) formattedNumber += ')-';
            if (i === 6 || i === 8) formattedNumber += '-';
            formattedNumber += phoneNumber[i] || '_';
        }

        return formattedNumber;
    };

    onSetValueToObj = (e) => {
        let value = e.target.value;
        const isBackspace = this.state.value.length > value.length;

        if (this.props.usePhoneMask) {
            if (isBackspace) {
                value = value.replace(/[^0-9]$/, '').replace(/[^\d]/g, '');
                value = value.slice(0, -1);
            }

            value = this.formatPhoneNumber(value);
        }

        this.setState({ value, isTouched: true });
        this.props.setValueToObj({ field: this.props.id, value });
    };


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
import React from "react";
import './input.css'
export const Input = ({label, id, type = 'text'}) => {
    return (
        <div className={'input-container'}>
            <input id={id} type={type} />
            <label htmlFor={id}> {label} </label>
        </div>
    )
}
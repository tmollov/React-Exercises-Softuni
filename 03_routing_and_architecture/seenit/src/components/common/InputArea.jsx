import React from 'react'

export default function InputArea(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input {...props}/>
            {props.errors ? <span className="invalid_input">{props.errors}</span> : null}
        </div>
    )
}
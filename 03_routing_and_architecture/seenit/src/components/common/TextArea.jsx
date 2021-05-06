import React from 'react'

export default function TextArea(props) {
    return (
        <div>
            <label>{props.label}</label>
            <textarea {...props}></textarea>
        </div>
    )
}

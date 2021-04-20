import React from 'react'

export default function TextArea({ label, name, change }) {
    return (
        <div>
            <label>{label}</label>
            <textarea name={name} onChange={change}></textarea>
        </div>
    )
}

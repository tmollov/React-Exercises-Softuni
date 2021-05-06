import React from 'react'

export default function TextArea({label,name,change,value}) {
    return (
        <div>
            <label>{label}</label>
            <textarea name={name} onChange={change} value={value}></textarea>
        </div>
    )
}

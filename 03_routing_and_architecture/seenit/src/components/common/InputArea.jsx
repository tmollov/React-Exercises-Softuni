import React from 'react'

export default function InputArea({label,name,type,change,errors}) {
    return (
        <div>
            <label>{label}</label>
            <input name={name} type={type} onChange={change}/>
            {errors ? <span className="invalid_input">{errors}</span> : null}
        </div>
    )
}
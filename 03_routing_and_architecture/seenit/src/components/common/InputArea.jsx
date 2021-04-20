import React from 'react'

export default function InputArea({label,name,type,change}) {
    return (
        <div>
            <label>{label}</label>
            <input name={name} type={type} onChange={change}/>
        </div>
    )
}

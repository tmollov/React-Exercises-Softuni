import React from 'react';
import icon from "../add_icon.png"

function Add({showAdd,title}) {
    return (
        <div className="addCard" onClick={showAdd}>
            <img src={icon} alt="add_icon"/>
            <h3>{title}</h3>
        </div>
    )
}

export default Add;
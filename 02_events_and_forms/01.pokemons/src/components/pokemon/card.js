import React from 'react';

function Card({index,number,name,imageUrl,showCard}) {
    return (
        <div className="pokemonCard" data-id={index} onClick={showCard}>
            <h3>#{('000' + number).slice(-3)} {name}</h3>
            <img src={imageUrl} alt="pokemon"/>
        </div>
    )
}

export default Card;
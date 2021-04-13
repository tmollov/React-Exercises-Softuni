import React from 'react';

function Detail({number, name, imageUrl, bio}) {
    return (
        <section className="selectedCard">
            <img src={imageUrl} alt="pokemon"/>
            <div className="pokemonInfo">
                <h2>#{('000' + number).slice(-3)} {name}</h2>
                <p>Bio:</p>
                <p>{bio}</p>
            </div>
        </section>
    )
}

export default Detail;
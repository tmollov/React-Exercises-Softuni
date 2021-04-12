import React, {Component} from 'react';
import Card from "../pokemon/card";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h1>Hello to pokemon world!</h1>
                <section className="pokemons">
                    <Card id={25}
                    name={"Pikachu"}
                    imageUrl={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}/>
                    <Card id={25}
                    name={"Pikachu"}
                    imageUrl={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}/>
                    <Card id={25}
                    name={"Pikachu"}
                    imageUrl={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}/>
                    <Card id={25}
                    name={"Pikachu"}
                    imageUrl={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}/>
                </section>
            </div>
        );
    }
}

export default Dashboard;
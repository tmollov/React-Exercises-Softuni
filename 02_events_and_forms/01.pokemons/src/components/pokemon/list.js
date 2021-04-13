import React, {Component} from 'react';
import Card from "./card";
import Add from "../add";

class List extends Component {
    generateCards = () => {
        let cards = [];
        if (this.props.pokemons.length > 0) {
            for (let i = 0; i < this.props.pokemons.length; i++) {
                let p = this.props.pokemons[i];
                cards.push(
                    <Card key={i}
                          index={i}
                          name={p.name}
                          imageUrl={p.image}
                          showCard={this.props.selectedCard}/>
                )
            }
            return cards;
        } else {
            return <div className="noPokemons"> No Pokemons !</div>
        }
    }

    render() {
        return (
            <section className="pokemons">
                <div className="pokemonList">
                    <Add showAdd={this.props.showAdd} title={this.props.addButtonTitle}/>
                    {this.generateCards()}
                </div>
            </section>
        );
    }
}

export default List;
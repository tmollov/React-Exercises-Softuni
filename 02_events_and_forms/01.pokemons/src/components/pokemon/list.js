import React, {Component} from 'react';
import Card from "./card";

class List extends Component {
    generateCards = () => {
        let cards = [];
        if (this.props.pokemons.length > 0) {
            for (let i = 0; i < this.props.pokemons.length; i++) {
                let p = this.props.pokemons[i];
                cards.push(
                    <Card key={i}
                          index={i}
                          number={p.number}
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
                {this.generateCards()}
            </section>
        );
    }
}

export default List;
import React, {Component} from 'react';
import List from "../pokemon/list";
import f from "../../fetcher";
import Detail from "../pokemon/detail";
import AddPokemonForm from "../addPokemonForm";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            selected: 0,
            isAddToggled: false,
            addButtonTitle: "Add Pokemon"
        }
    }

    componentDidMount = () => {
        this.fetchData();
    }

    fetchData = () => {
        f.get(f.endpoints.pokemons, (res) => {
            this.setState((prev,props) => {
                return {
                    pokemons:res
                }
            })
        })
    }

    setCard = (event) => {
        let target = Number(event.currentTarget.getAttribute("data-id"));
        this.setState({selected: target});
    }

    toggleAdd = () => {
        this.setState({isAddToggled: !this.state.isAddToggled})
        !this.state.isAddToggled ?
            this.setState({addButtonTitle: "Back to selected"}) :
            this.setState({addButtonTitle: "Add Pokemon"})
    }

    showContent = () => {
        if (this.state.isAddToggled) {
            return <AddPokemonForm toggle={this.toggleAdd} refresh={this.refresh}/>
        } else {
            if (this.state.pokemons.length > 0) {
                let p = this.state.pokemons[this.state.selected]
                return <Detail number={p.id}
                               name={p.name}
                               imageUrl={p.image}
                               bio={p.bio}/>
            }
        }
    }

    refresh = () => {
        this.fetchData();
    }
    render = () => {
        return (
            <div className="dashboard">
                <List pokemons={this.state.pokemons}
                      selectedCard={this.setCard}
                      showAdd={this.toggleAdd}
                      addButtonTitle={this.state.addButtonTitle}
                      />
                {this.showContent()}
            </div>
        );
    }
}

export default Dashboard;
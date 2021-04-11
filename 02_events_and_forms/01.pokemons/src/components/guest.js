import React, {Component} from 'react';
import Login from "./user/login";

class Guest extends Component {
    render() {
        let p = this.props;
        return (
            <div>
                <h1> Welcome to Pokemons!</h1>
                <Login setUser={p.setUser}></Login>
            </div>
        );
    }
}

export default Guest;
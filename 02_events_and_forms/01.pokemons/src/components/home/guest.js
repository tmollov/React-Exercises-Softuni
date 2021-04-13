import React, {Component} from 'react';
import Login from "../user/login";
import Register from "../user/register";

class Guest extends Component {
    constructor(props) {
        super(props);
        this.state = {toggle: false}
    }

    changeState = () => {
        this.setState((prev) => {
            return {
                toggle: !prev.toggle
            }
        })
    }

    toggleContent = () => {
        if (this.state.toggle) {
            return <Register setUser={this.props.setUser}></Register>
        } else {
            return <Login setUser={this.props.setUser}></Login>;
        }
    }

    toggleTitles = (title) => {
        let r = "Click to switch Login / Register"
        return this.state.toggle ? r : r
    }

    render() {
        return (
            <div className="guest">
                <h1> Welcome to Pokemons!</h1>
                <div className="toggleButtons">
                    <button onClick={this.changeState}>{this.toggleTitles("Login")}</button>
                </div>
                {this.toggleContent()}
            </div>
        );
    }
}

export default Guest;
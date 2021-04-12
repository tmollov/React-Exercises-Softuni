import React, {Component} from "react";
import Dashboard from "./components/home/dashboard";
import Guest from "./components/home/guest";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {isLogged: false}
    }

    getDashboard = () => {
        if (this.state.isLogged) {
            return <Dashboard></Dashboard>
        } else {
            return <Guest setUser={this.setUserLoggedIn}></Guest>
        }
    }

    setUserLoggedIn = () => {
        this.setState({isLogged: true});
    }

    componentDidMount() {
        if (localStorage.getItem("jwt")) {
            this.setState({isLogged: true})
            return;
        }
        this.setState({isLogged: false})
    }

    render() {
        return (
            <div className="App">
                {this.getDashboard()}
            </div>
        )
    };
}

export default App;

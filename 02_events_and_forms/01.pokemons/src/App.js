import React, {Component} from "react";
import Dashboard from "./components/dashboard";
import Guest from "./components/guest";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {isLogged: false}
    }

    setUserLoggedIn = () => {
        this.setState({isLogged:true})
    }

    getDashboard = () => {
        if (this.state.isLogged) {
            return <Dashboard></Dashboard>
        } else {
            return <Guest setUser={this.setUserLoggedIn}></Guest>
        }
    }

    componentDidMount() {
        if (localStorage.getItem("jwt")){
            this.setState({isLogged:true})
            return;
        }
        this.setState({isLogged:false})
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

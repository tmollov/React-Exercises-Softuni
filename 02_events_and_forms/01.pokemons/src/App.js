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
            return (
                <div>
                    <div className="menubar">
                        <h1>Hello to pokemon world!</h1>
                        <button onClick={this.logOut}><u>Log out</u></button>
                    </div>
                    <Dashboard showAdd={this.showAdd}></Dashboard>
                </div>
            )

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


    logOut = () => {
        localStorage.clear();
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

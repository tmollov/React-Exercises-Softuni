import './App.css';
import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
    }

    incrementCounter() {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
            }
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Count: {this.state.count}
                    </p>
                    <button onClick={this.incrementCounter.bind(this)}>Increment</button>
                </header>
            </div>
        )
    }
}
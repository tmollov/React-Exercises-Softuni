import React, { Component } from 'react';
import './App.css';

import Slider from './components/Slider/Slider';
import Characters from './components/Characters/Characters';

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentEpisode: 0
        }

        this.changeEpisode = (ep) => {
            this.setState({ currentEpisode: ep })
        }
    }
    render() {
        return (
            <div className="container">
                <h1>React Components</h1>
                <Slider 
                    updateFunc={this.changeEpisode}
                    focusedEpisode={this.state.currentEpisode} />
                <Characters />
            </div>
        );
    }
}

export default App;

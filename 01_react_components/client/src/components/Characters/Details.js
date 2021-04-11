import React from 'react';
import fetcher from '../../fetcher';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    fetchData = () => {
        fetcher.get(fetcher.endpoints.character(this.props.characterId), (res) => {
            this.setState((prev) => {
                return res
            })
        })
    }

    componentDidMount = () => {
        this.fetchData();
    }

    componentDidUpdate = () => {
        this.fetchData();
    }

    render = () => (
        <section id="bio">
            <div className="image">
                <img src={this.state.url} alt="characterImage"/>
            </div>
            <div className="info">
                <p>Name: <strong>{this.state.name}</strong></p>
                <p>{this.state.bio}</p>
                <p></p>
            </div>
        </section>
    )
}
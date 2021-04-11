import React, { Component } from 'react';
import fetcher from '../../fetcher';

export default class Rooster extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    showDetails = (event) => {
        this.props.changeCharacter(Number(event.target.getAttribute("data-id")));
    }

    generateItems = (arr) => {
        const items = []

        for (const [index, value] of arr.entries()) {
            items.push(
            <img key={index} 
                data-id={value.id} 
                className="button" 
                src={value.url} 
                alt="buttunImage"
                onClick={this.showDetails} >
            </img>)
        }
        return items;
    }

    fetchData = () => {
        fetcher.get(fetcher.endpoints.roster, (res) => {
            this.setState((prev) => {
                return {items: this.generateItems(res)};
            })
        })
    }

    componentDidMount = () => {
        this.fetchData();
    }

    componentDidUpdate
    render = () => {
        return (
            <section id="roster">
                <div className="roster-image-container">
                    {this.state.items}
                </div>
            </section>
        )
    }
}
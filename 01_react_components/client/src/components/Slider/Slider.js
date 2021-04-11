import React from 'react';
import fetcher from '../../fetcher';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageUrl: "", currentEpisode: 0 }
    }

    fetchData = () => {
        fetcher.get(fetcher.endpoints.episodePreview(this.state.currentEpisode), (res) => {
            this.setState((prev) => {
                return {
                    imageUrl: res.url,
                    currentEpisode: prev.currentEpisode
                }
            })
        })
    }

    changeEpisode = (event) => {
        let currentMove = event.target.getAttribute('title');
        let maxIndex = 2;
        let minIndex = 0
        let moveTo = 0;

        if (currentMove === "previous") {
            this.state.currentEpisode - 1 <= minIndex
                ? moveTo = minIndex
                : moveTo = this.state.currentEpisode - 1

        } else {
            this.state.currentEpisode + 1 >= maxIndex
                ? moveTo = maxIndex
                : moveTo = this.state.currentEpisode + 1
        }

        this.props.updateFunc(moveTo);

        this.setState({ currentEpisode: moveTo }, this.fetchData)
    }

    componentDidMount() {
        this.fetchData();
    }

    render = () => (
        <div>
            <section id="slider">
                <img className="button" src="/left.png" title="previous" alt="nav" 
                    onClick={this.changeEpisode}/>
                <div className="image-container">
                    <img src={this.state.imageUrl} alt="episode" />
                </div>
                <img className="button" src="/right.png" title="next" alt="nav" 
                    onClick={this.changeEpisode}/>
            </section>
        </div>
    );
}
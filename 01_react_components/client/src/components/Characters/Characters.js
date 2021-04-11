import React from 'react';

import Rooster from './Rooster';
import Details from './Details';

export default class Characters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characterId: 0
        }

        this.changeCharacter = (id) => {
            this.setState({characterId: id})
        }
    }
    render = () => (
        <div>
            <Rooster changeCharacter={this.changeCharacter}/>
            <Details characterId={this.state.characterId}/>
        </div>
    )
}
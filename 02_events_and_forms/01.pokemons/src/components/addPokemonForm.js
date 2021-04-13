import React, {Component} from 'react';
import f from "../fetcher";

class AddPokemonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image: "",
            bio: ""
        }
    }

    handleSubmitButton = (event) => {
        if (event.target.parentElement.checkValidity()) {
            event.preventDefault();
            f.post(f.endpoints.pokemons, this.state,(res)=>{
                console.log(res)
                this.props.refresh();
            })
        }
        this.props.toggle();
    }

    handleOnInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    render() {
        return (
            <form className={"addPokemonForm"}>

                <div className="inputDiv">
                    <p>Pokemon name</p>
                    <input className="input"
                           type="text"
                           placeholder="Enter Pokemon name..."
                           name="name"
                           required
                           onChange={this.handleOnInputChange}/>
                </div>

                <div className="inputDiv">
                    <p>Pokemon Image</p>
                    <input className="input"
                           type="url"
                           placeholder="Enter Image URL..."
                           name="image"
                           required
                           onChange={this.handleOnInputChange}/>
                </div>

                <div className="inputDiv">
                    <p>Pokemon Bio</p>
                    <input className="input"
                           type="text"
                           placeholder="Enter Information about pokemon..."
                           name="bio"
                           minLength={10}
                           required
                           onChange={this.handleOnInputChange}/>
                </div>

                <input className="submitButton"
                       type="submit"
                       value="Add Pokemon"
                       onClick={this.handleSubmitButton}/>
            </form>
        )
    }
}

export default AddPokemonForm;
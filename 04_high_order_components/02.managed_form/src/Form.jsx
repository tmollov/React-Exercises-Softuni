import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }

    addInputs = () => {
        let arr = [];

        for (let index = 0; index < this.props.children.length; index++) {
            let el = this.props.children[index];

            if (el.type === "button" || el.type === "submit") {
                arr.push(React.createElement(el.type, { key: index, ...el.props }));
            } else {

                let props = {
                    key: index,
                    ...el.props,
                    onChange: this.handleChange
                };
                arr.push(React.createElement(el.type, props));
            }
        }
        return arr;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.addInputs()}
            </form>
        )
    }
}

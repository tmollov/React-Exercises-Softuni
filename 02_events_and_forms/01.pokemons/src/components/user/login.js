import React, {Component} from 'react';
import f from "../../fetcher";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isAuthRight: true
        }
        this.msg ={
            invalid:"Invalid credentials!"
        }
    }

    handleSubmitButton = (event) => {
        if (event.target.parentElement.checkValidity()) {
            event.preventDefault();
            f.post(f.endpoints.login,this.state,(res) =>{
                if (typeof res === "string") {
                    this.setState({isAuthRight:false});
                    return;
                }
                localStorage.setItem("jwt",res.accessToken)
                this.props.setUser();
            })
        }
    }

    handleOnInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    }

    showMessage = (target, message) => {
        return target === false ?
            <div><p className="errorP">{message}</p></div> : ""
    }

    render() {
        return (
            <form>
                <div className="inputDiv">
                    <p>Email</p>
                    <input className="input"
                           type="email"
                           placeholder="Enter Email..."
                           name="email"
                           required
                           onChange={this.handleOnInputChange}/>
                </div>

                <div className="inputDiv">
                    <p>Password</p>
                    <input className="input"
                           type="password"
                           placeholder="Enter Password..."
                           name="password"
                           minLength="6"
                           required
                           onChange={this.handleOnInputChange}/>
                </div>

                {this.showMessage(this.state.isAuthRight,
                    this.msg.invalid)}

                <input className="submitButton"
                       type="submit"
                       value="Log in"
                       onClick={this.handleSubmitButton}/>
            </form>
        )
    }
}

export default Login;
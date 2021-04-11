import React, {Component} from 'react';
import f from "../../fetcher";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleLoginButton = (event) => {
        if (event.target.parentElement.checkValidity()) {
            event.preventDefault();
            console.log(this.state)
            f.post(f.endpoints.login,this.state,(res) =>{
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

    render() {
        return (
            <form>
                <h3>Login</h3>
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

                <input className="submitButton"
                       type="submit"
                       value="Log in"
                       onClick={this.handleLoginButton}/>
            </form>
        )
    }
}

export default Login;
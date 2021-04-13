import React, {Component} from 'react';
import f from "../../fetcher";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            confirm_email: "",
            isEmailsSame: true,
            password: "",
            confirm_password: "",
            isPasswordsSame: true,
            nickname: "",
            isNicknameAvail: true,
            nicknames: []
        }
        this.msg = {
            nickname: "Nickname not available!",
            email: "Emails doesn't match!",
            password: "Passwords doesn't match!"
        }
    }

    componentDidMount = () => {
        f.get(f.endpoints.nicknames, (res) => {
            if (this.state.nicknames.length !== res.length){
                this.setState({nicknames: res})
            }
        })
    }

    handleSubmitButton = (event) => {
        if (event.target.parentElement.checkValidity() &&
            this.state.isEmailsSame &&
            this.state.isPasswordsSame) {
            event.preventDefault();

            let data = {
                email: this.state.email,
                password: this.state.password,
                nickname: this.state.nickname
            }
            f.post(f.endpoints.register, data, (res) => {
                if (!(typeof res == 'string' || res instanceof String)) {
                    localStorage.setItem("jwt", res.accessToken)
                    this.props.setUser();
                }
            })
        }
    }

    handleOnInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    handleNicknameInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})

        let arr = this.state.nicknames;
        if (arr.some(x=>x === value)){
            this.setState({isNicknameAvail:false})
        } else {
            this.setState({isNicknameAvail:true})
        }
    }

    handleConfirmEmail = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
        if (this.state.email === value) {
            this.setState({isEmailsSame: true})
            return;
        }
        this.setState({isEmailsSame: false})
    }

    handleConfirmPassword = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
        if (this.state.password === value) {
            this.setState({isPasswordsSame: true})
            return;
        }
        this.setState({isPasswordsSame: false})
    }

    showMessage = (target, message) => {
        return target === false ?
            <p className="errorP">{message}</p> : ""
    }

    render() {
        return (
            <form>
                <p>Register:</p>
                <div className="inputDiv">
                    <p>Nickname</p>
                    <input className="input"
                           type="text"
                           placeholder="Enter Nickname..."
                           name="nickname"
                           minLength="4"
                           required
                           onChange={this.handleNicknameInput}/>
                    {this.showMessage(this.state.isNicknameAvail,
                        this.msg.nickname)}
                </div>

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
                    <p>Confirm Email</p>
                    <input className="input"
                           type="email"
                           placeholder="Re-Enter Email..."
                           name="confirm_email"
                           required
                           onChange={this.handleConfirmEmail}/>
                    {this.showMessage(this.state.isEmailsSame,
                        this.msg.email)}
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
                <div className="inputDiv">
                    <p>Confirm Password</p>
                    <input className="input"
                           type="password"
                           placeholder="Re-Enter Password..."
                           name="confirm_password"
                           minLength="4"
                           required
                           onChange={this.handleConfirmPassword}/>
                    {this.showMessage(this.state.isPasswordsSame,
                        this.msg.password)}
                </div>

                <input className="submitButton"
                       type="submit"
                       value="Register"
                       onClick={this.handleSubmitButton}/>
            </form>
        );
    }
}

export default Register;
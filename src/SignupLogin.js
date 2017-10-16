import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class SignupLogin extends Component {
    constructor() {
        super();

        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toMainPage = this.toMainPage.bind(this);
    }

    handleSignup(e) {
        e.preventDefault();

        const newUser = {
            name: this.name.value,
            username: this.username.value
        }
        axios.post('http://localhost:8080/newuser', newUser)
            .then(res => {
                console.log(res)
        });
    }

    handleLogin(e) {
        e.preventDefault();

        const login = {
            login: this.login.value
        }
        axios.post('http://localhost:8080/login', login)
            .then(res => {
                console.log(res)
        // this.toMainPage();
        });

    }

    toMainPage() {
        window.location.href = '/'
    }

    render() {
        return (
            <div>
                <div className="text-center construction">
                    <h1>This page under construction</h1>
                </div>
                <div>
                    <div className="page-header titles text-center">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="signlog">
                        <form className="roboto" onSubmit={this.handleSignup}>
                            <div className="form-group">
                                <label className="makebold">Name:</label>
                                <input type="text" name="name" ref={(elem) => { this.name = elem }} className="form-control" /><br />
                            </div>
                            <div className="form-group">
                                <label className="makebold">Username:</label>
                                <input type="text" name="username" ref={(elem) => { this.username = elem }} className="form-control" /><br />
                            </div>
                            <button type="submit" className="signbtn">Signup</button>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="page-header titles text-center">
                        <h1>Login</h1>
                    </div>
                    <div className="signlog">
                        <form className="roboto" onSubmit={this.handleLogin}>
                            <div className="form-group">
                                <label className="makebold">Username:</label>
                                <input type="text" name="username" ref={(elem) => { this.login = elem }} className="form-control" /><br />
                            </div>
                            <button type="submit" className="logbtn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupLogin;
import React, { Component } from 'react';
import './App.css';
import Logo from './images/AngeliqueLogo.png';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                    <img src={Logo} alt="logo" />
                        <div className="list roboto">
                            <ul className="nav navbar-nav">
                                <li><Link to="/"><span className="glyphicon glyphicon-music"></span>PitchMaestro</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/email">Contact Angelique</Link></li>
                                <li><Link to="/signuplogin">Sign Up/ Log In</Link></li>
                                <li><Link to="/stats">See Your Stats</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </nav>
                {this.props.children}
                <nav className="navbar navbar-default navbar-fixed-bottom footer">
                    <div className="container">
                        <p><span className="glyphicon glyphicon-copyright-mark"></span> Created by Angelique Lazarus using React and Tone.js</p>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
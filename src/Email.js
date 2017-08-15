import React, { Component } from 'react';
import './App.css';
// import { Collapse, Button, CardBlock, Card } from 'reactstrap';



class Email extends Component {
    render() {
        return (
            <div>
                <div className="page-header text-center titles">
                    <h1>Send Angelique an Email!</h1>
                </div>
                <br />
                <form method="POST" action="http://formspree.io/creativefreeflight@gmail.com" className="form-horizontal">
                    <div className="form-group roboto">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Name:</label>
                        <input type="text" name="name" placeholder="Your name" className="col-sm-9" />
                    </div>
                    <div className="form-group roboto">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email:</label>
                        <input type="email" name="email" placeholder="Your email" className="col-sm-9" />
                    </div>
                    <div className="form-group roboto">
                        <label htmlFor="inputMessage" className="col-sm-2 control-label">Message:</label>
                        <textarea name="message" placeholder="Your message" className="col-sm-9"></textarea>
                    </div>
                    <div className="form-group roboto">
                        <input type="text" name="_gotcha" className="gotcha" />
                        <button type="submit" className="center-block logbtn">Send</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Email;
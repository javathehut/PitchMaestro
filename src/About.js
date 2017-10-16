import React, { Component } from 'react';
import './App.css';
// import { Collapse, Button, CardBlock, Card } from 'reactstrap';



class About extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className=" col-md-12 col-lg-6">
                        <div className="titles page-header text-center">
                            <h1>About Pitch Maestro</h1>
                        </div>
                        <div>
                            <h2>Why did you make this?</h2>
                            <p>I wanted to combine my education background and love of music and include them in my final project. I had a number of ideas around this, including this one, which I'd initially dismissed as beyond my current capabilities. When Ian, one of my instructors convinced me I was able to actually make this work, I decided I'd give it a go. Turns out he was right!</p>
                             <h2>How do I engage with it?</h2>
                            <p>BASICALLY, </p>
                            <p>SPECIFICALLY, </p>
                        </div>
                    </div>
                    <div className=" col-md-12 col-lg-6">
                        <div className="titles page-header text-center">
                            <h1>About Angelique</h1>
                        </div>
                        <div>
                            <h2>Background</h2>
                            <p> 8 years of ESL Teaching, Singer, Voice actor, now moving into Web Development.</p>
                            <h2>Aspirations</h2>
                            <p>Work in an organisation that allows me to combine my passions for education, problem-solving, and web development.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
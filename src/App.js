import React, { Component } from 'react';
import './App.css';
import Maestro from './Maestro.js';
import Test from './Test.js';
import { allChords } from './chords.js';
import { Collapse, Button, CardBlock, Card } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      keyIndex: 0,
      chordIndex: 0,
      testing: false,
      collapse: {
        practice: false,
        test: false,
        score: false
      }
    }
    this.changeChord = this.changeChord.bind(this);
    this.changeKey = this.changeKey.bind(this);
    this.testingTrue = this.testingTrue.bind(this);
    this.testingFalse = this.testingFalse.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  changeChord() {
    this.setState({
      chordIndex: (this.state.chordIndex + 1) % allChords[this.state.keyIndex].length
    })
  }

  changeKey() {
    this.setState({
      keyIndex: (this.state.keyIndex + 1) % allChords.length
    })
  }

  testingTrue() {
    this.setState({
      testing: true
    })
  }

  testingFalse() {
    this.setState({
      testing: false
    })
  }


  toggle(value) {
    this.state.collapse[value] = !this.state.collapse[value]
    this.setState({ 
      collapse: this.state.collapse 
    });
  }

  // componentDidMount() {
  //   let waveform = new window.Waveform({
  //     container: this.refs.ayo,
  //     data: [1, 0.2, 0.5],
  //     innerColor: "#CAB",
  //     outerColor: "#363"
  //   })
  // }

  render() {
    return (

      <div>
        <div className="page-header">
          <h1 className="text-center">Pitch Maestro <br />
            <small className="small">An ear trainer for the musically inclined and musically interested!</small>
            <small className="small2">A musical ear trainer!</small></h1>
            <h3 className="text-center roboto">Click any "<span className="glyphicon glyphicon-chevron-down"></span>" for instructions</h3>
        </div>
        <div className="row">
          <Maestro keyIndex={this.state.keyIndex} chordIndex={this.state.chordIndex} changeChord={this.changeChord} changeKey={this.changeKey} testing={this.state.testing} toggle={this.toggle} collapse={this.state.collapse}/>
          <Test keyIndex={this.state.keyIndex} chordIndex={this.state.chordIndex} changeChord={this.changeChord} changeKey={this.changeKey} testingTrue={this.testingTrue} testingFalse={this.testingFalse} testing={this.state.testing} toggle={this.toggle} collapse={this.state.collapse} />
        </div>
      </div>
    );
  }
}

export default App;

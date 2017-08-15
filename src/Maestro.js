import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';
import { allChords, chordNames } from './chords.js';
import { Row, Collapse, Button, CardBlock, Card } from 'reactstrap';

class Maestro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
        // this.disablePractice = this.disablePractice.bind(this);
        this.playNote = this.playNote.bind(this);
    }


playNote(note) {
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease(note, '4n')
};



// disablePractice() {
//     if (this.props.testing === true) {
//         this.setState({
//             disabled: true
//         });
//         console.log('disabled')
//     } else {
//         this.setState({
//             disabled: false
//         });
//     }
// }

render() {
    let chord = allChords[this.props.keyIndex][this.props.chordIndex];
    let practicebtnJSX = chord.map(note => {
        return (
            <div className="row">
                <div className="col-xs-6">
                    <button id={note} type="button" className="btn btn-default practicebtn"
                        aria-label="Left Align"
                        onClick={() => { this.playNote(note) }}
                        disabled={this.props.testing ? true : false}>
                        <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="col-xs-2 noteDisplay center-block">
                    {note}
                </div>
            </div>
        )
    });
    return (
        <div className="col-xs-12 col-sm-6 practice">
            <div className="col-md-12 titles text-center">
                <Button onClick={()=>{this.props.toggle("practice")}} className="titlebtn">
                    <h1>PRACTICE <small><span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></small></h1>
                </Button>
                <Collapse isOpen={this.props.collapse.practice}>
                    <Card>
                        <CardBlock className="roboto showcard">
                            <p>Choose a chord and key and play the notes as many times as you need to. Then go the TEST section. Make sure you're ready! Once you click "Play a note," the practice buttons will be disabled until you click "Submit".</p>
                        </CardBlock>
                    </Card>
                </Collapse>
            </div>
            <div className="col-md-12 game roboto">
                <h2>{chordNames[this.props.keyIndex][this.props.chordIndex]} Chord</h2>
                <div className="buttonDiv center-block">
                    <button onClick={this.props.changeKey} className="changeKeybtn">Change Chord</button>
                    <button onClick={this.props.changeChord} className="changeChordbtn">Change Key</button>
                </div>
                {practicebtnJSX}
            </div>
        </div>
    );
}

}

export default Maestro;
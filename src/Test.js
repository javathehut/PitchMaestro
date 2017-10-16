import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';
import { allChords } from './chords.js';
import Score from './Score.js';
import { Collapse, Button, CardBlock, Card } from 'reactstrap';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            randomNote: '',
            choice: '',
            correcthidden: true,
            incorrecthidden: true,
            disabled: false,
            streak: 0,
            // rightAnswers: 0,
            longestStreak: window.localStorage.longestStreak || 0
        };
        this.playRandomNote = this.playRandomNote.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.saveChoice = this.saveChoice.bind(this);
    }

    playRandomNote() {
        let synth = new Tone.Synth().toMaster();
        let randNote = allChords[this.props.keyIndex][this.props.chordIndex][Math.floor(Math.random() * (allChords[this.props.keyIndex][this.props.chordIndex].length))];
        //Play a random note then play that same note until Submit is pressed, then choose new random note
        if (this.state.randomNote === '') {
            synth.triggerAttackRelease(randNote, '4n');
            this.setState({
                randomNote: randNote, //store note in state of button
            });
        } else {
            synth.triggerAttackRelease(this.state.randomNote, '4n')
        };
        this.setState({
            disabled: false, //enable submit button
            correcthidden: true, //hide results
            incorrecthidden: true,
        });
        this.props.testingTrue(); //TO BE USED TO DISABLE PRACTICE BUTTONS
    }

    checkAnswer(e) {
        //if the id of the radio button matches the index of the note played, show correct
        if (this.state.choice === this.state.randomNote) {
            if (this.state.streak >= this.state.longestStreak) {
                console.log('beat longest streak')
                this.setState({
                    correcthidden: false,
                    streak: this.state.streak + 1,
                    // rightAnswers: this.state.rightAnswers + 1,
                    longestStreak: this.state.streak + 1
                })
                localStorage.setItem("longestStreak", this.state.streak)
            } else {
                console.log("correct, but longest streak unbeaten")
                this.setState({
                    correcthidden: false,
                    streak: this.state.streak + 1,
                    // rightAnswers: this.state.rightAnswers + 1
                })
            }
        } else {
            console.log("incorrect")
            this.setState({
                incorrecthidden: false,
                streak: 0
            })
        };
        this.setState({
            randomNote: '', //to allow test button to choose new random note
            disabled: true
        });
        this.props.testingFalse();
        this.radio.reset();
    }

    saveChoice(note, i) {
        this.setState({
            choice: note
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.longestStreak !== this.state.longestStreak) {
            localStorage.setItem("longestStreak", this.state.longestStreak)
            console.log(localStorage)
        }
    }


    render() {
        let chord = allChords[this.props.keyIndex][this.props.chordIndex];
        let testbtnJSX = chord.map((note, i) => {
            return (
                <div className="col-xs-12 roboto">
                    <div className="radio">
                        <label>
                            <input onChange={() => { this.saveChoice(note, i) }} type="radio" name="optionsRadios" id={note} value={"option" + i} />
                            {note}
                        </label>
                    </div>
                </div>
            )
        });
    let streak = this.state.streak + 1;
        return (
            <div>
                <div className="col-xs-12 col-sm-6">
                    <div className="col-md-12 titles text-center">
                        <Button onClick={() => { this.props.toggle("test") }} className="titlebtn">
                            <h1>TEST <small><span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></small></h1>
                        </Button>
                        <Collapse isOpen={this.props.collapse.test}>
                            <Card>
                                <CardBlock className="roboto showcard">
                                    <p>Once you're done practicing, click "Play a note". Choose the note you think you heard and click "Submit" to reveal your results.</p>
                                </CardBlock>
                            </Card>
                        </Collapse>
                    </div>
                    <div className="col-md-12 game test">
                        <div className="row">
                            <div className="col-xs-12">
                                <button type="button" className="btn btn-default testbtn roboto"
                                    aria-label="Center Align"
                                    onClick={this.playRandomNote}
                                    disabled={this.state.playDisabled ? true : false}>
                                    <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Play note {streak}
                            </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 testQuest">
                                <p>{streak}. What note do you hear?</p>
                            </div>
                        </div>
                        <div className="row">
                            <form ref={(elem) => { this.radio = elem }} >
                                <div className="col-xs-6">
                                    {testbtnJSX}
                                </div>
                                <div className="col-xs-6 roboto">
                                    <button onClick={this.checkAnswer} disabled={this.state.disabled ? true : false} type="button" className="btn btn-default submitbtn">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div hidden={this.state.correcthidden ? true : false} className="rightResult roboto">
                                <p>CORRECT!</p>
                            </div>
                            <div hidden={this.state.incorrecthidden ? true : false} className="wrongResult roboto">
                                <p>INCORRECT. PLAY AGAIN.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Score streak={this.state.streak} longestStreak={this.state.longestStreak} rightAnswers={this.state.rightAnswers} toggle={this.props.toggle} collapse={this.props.collapse} />
            </div>
        )
    }
};

export default Test;
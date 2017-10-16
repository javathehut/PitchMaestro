import React, { Component } from 'react';
import './App.css';
import { Row, Collapse, Button, CardBlock, Card } from 'reactstrap';

class Score extends Component {

    render() {
        let streak = this.props.streak;
        let longestStreak = this.props.longestStreak;
        let rightAnswers = this.props.rightAnswers;

        return (
            <div className="col-xs-12 ">
                <br /><br />
                <div className="col-md-12 titles text-center">
                    <Button onClick={() => { this.props.toggle("score") }} className="titlebtn">
                        <h1>SCORE <small><span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></small></h1>
                    </Button>
                    <Collapse isOpen={this.props.collapse.score}>
                        <Card>
                            <CardBlock className="roboto showcard">
                                <p>See if you can beat your longest streak!!</p>
                            </CardBlock>
                        </Card>
                    </Collapse>
                </div>
                <div className="col-md-12 game">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h2 className="roboto text-center">Current Streak: {streak}</h2>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h2 className="roboto text-center">Longest Streak: {longestStreak}</h2>
                        </div>
                        {/*<div className="col-xs-12 col-md-4 hidden">
                            <h2 className="roboto text-center">Total Right Answers: {rightAnswers}</h2>
                        </div>*/}
                    </div>
                </div>
                <div className="col-md-12 spacer"></div>
            </div>
        )
    }
}

export default Score;
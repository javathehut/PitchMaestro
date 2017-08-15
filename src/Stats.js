import React, { Component } from 'react';
import './App.css';

class Stats extends Component {

    render() {
        return (
            <div>
                <div className="text-center construction">
                    <h1>This page under construction</h1>
                </div>
                <div className="titles page-header">
                    <h1 className="text-center"> User's Stats</h1>
                </div>
                <br />
                <table className="table roboto tablestyle">
                    <thead className="table-head">
                        <tr>
                            <th>Session Date</th>
                            <th>Total Right Answers</th>
                            <th>Longest Streak</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Today</td>
                            <td>100</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Stats;
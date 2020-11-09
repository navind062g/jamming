/* eslint-disable no-useless-constructor */
import React from 'react';
import './Track.css';

class Track extends React.Component {

    constructor(props) {
        super(props);
    }

    renderAction() {
        if(this.props.isRemoval === true) {
            return "-";
        }
        return "+";
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Track Name</h3>
                    <p>Summer | Game Of Thrones</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        );
    }
}

export default Track;
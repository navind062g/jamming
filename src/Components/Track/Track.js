/* eslint-disable no-useless-constructor */
import React from 'react';
import './Track.css';

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this);
    }

    renderAction() {
        if(!this.props.isRemoval || this.props.isRemoval === true) {
            return <span>Remove</span>;
        }
        return <span>Add</span>;
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        );
    }
}

export default Track;
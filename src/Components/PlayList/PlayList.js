import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(element) {
        let newValue = element.target.value;
        this.props.onUpdate(newValue);
    }

    render() {
        return (
            <div className="PlayList">
                <input value={this.props.playlistName} onChange={this.updateValue}/>
                <TrackList 
                    tracks={this.props.playlistTracks} 
                    onRemove={this.props.onRemove}
                    isRemoval={true} />
                <button className="PlayList-save" onClick={this.props.onSave}>Save to Spotify</button>
            </div>
        );
    }
}

export default PlayList;
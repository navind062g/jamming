import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    render() {
        let defaultValue = 'New Playlist';
        return (
            <div className="PlayList">
                <input value={defaultValue} />
                <TrackList />
                <button className="PlayList-save">Save to Spotify</button>
            </div>
        );
    }
}

export default PlayList;
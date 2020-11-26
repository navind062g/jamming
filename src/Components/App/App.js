import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

import Spotify from '../../Util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      tracks: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };
  }

  addTrack(track) {
    let playlistArray = this.state.playlistTracks;
    let foundTrack = playlistArray.find(playlistTrack => {
      return playlistTrack.id === track.id;
    });

    if(foundTrack) {
      return;
    }
    playlistArray.push(track);
    this.setState({playlistTracks: playlistArray});
  }

  removeTrack(trackToRemove) {
    let playlistArray = this.state.playlistTracks;

    let newPlaylist = playlistArray.filter(track => track.id !== trackToRemove.id);
    this.setState({playlistTracks: newPlaylist});
  }

  updatePlaylistName(newName) {
    this.setState({playlistName: newName});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => {
      return track.uri;
    });

    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({ tracks: searchResults });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults tracks={this.state.tracks} 
            onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onUpdate={this.updatePlaylistName}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

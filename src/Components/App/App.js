import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [
        {
          name: "Cuddly Toy (1969)",
          artist: "The Monkees",
          album: "The Monkees Greatest Hits",
          id: 1,
        },
        {
          name: "Me, Myself And I",
          artist: "G-Eazy",
          album: "When Its Dark Out",
          id: 2,
        },
        {
          name: "Shape Of You",
          artist: "Ed Sheeran",
          album: "Shape Of You",
          id: 3,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults tracks={this.state.tracks} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

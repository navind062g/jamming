import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.setState({
            searchTerm: ''
        });
    }
    search() {
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange(evt) {
        this.setState({searchTerm: evt.target.value});
    }

    handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.search();
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;
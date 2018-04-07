import React, { Component } from 'react';
import ArtistPreview from '../components/artistPreview';
// import ArtistSelect from '../components/artistSelect';
import FlipMove from 'react-flip-move';
var shuffle = require('shuffle-array');

class AllArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      sortedArtists: []
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection = (e) => {
    this.setState({ value: e.target.value });
    let artists;

    if (this.state.value === "ascending") {
      console.log("ascendign")
      let artists = this.sortAscending(this.props.artists);
      console.log(artists)

      this.setState({sortedArtists: artists});
      // this.props.artists = this.sortAscending(this.props.artists);
    }
    else if (this.state.value === "descending") {
      let artists = this.sortAge(this.props.artists);
      console.log(artists)

      this.setState({sortedArtists: artists});
    }
    else if (this.state.value === "random") {
      let artists = this.sortRandom(this.props.artists);
      console.log(artists)
      this.setState({sortedArtists: artists});
    }
  }

  sortAscending = a => a.slice().sort((a,b) => {
    var nameA = a.last_name.toUpperCase();
    var nameB = b.last_name.toUpperCase();
    if (nameA < nameB) { return -1; }
    else if (nameA > nameB) { return 1; }
    else return 0;
  });

  sortAge = a => a.slice().sort((a,b) => b.birth_year - a.birth_year);

  sortRandom = a => shuffle(a.slice());


  render() {
    const { artists } = this.props;
    let artistComponents;
    if (this.state.sortedArtists.length) {
      artistComponents = this.state.sortedArtists.map(a => <ArtistPreview key={a.id} artist={a} actions={this.props.actions}/>)
    }
    else {
      artistComponents = artists.map(a => <ArtistPreview key={a.id} artist={a} actions={this.props.actions}/>)
    }


    return (
      <div>
        <div className="artists-container wrapper">

        <select className="artist-select" onChange={this.handleSelection}>
          <option selected>Sort Artists</option>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
          <option value="random">Random</option>
        </select>

          <FlipMove
            staggerDelayBy={130}>
            {artistComponents}
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default AllArtistsContainer;

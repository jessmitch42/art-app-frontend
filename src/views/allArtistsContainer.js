import React, { Component } from 'react';
import ArtistCard from '../components/artistCard';
import ArtistSortingSelect from '../components/artistSelect'

import FlipMove from 'react-flip-move';
var shuffle = require('shuffle-array');


class AllArtistsContainer extends Component {
  state = {
    sortedArtists: []
  };

  // TODO: filter artists with search bar
  // TODO: display artist bio on hover

  handleSelection = (e) => {
    let artists;

    if (e.target.value === "ascending") {
      artists = this.sortAscending(this.props.artistsList);
      this.setState({sortedArtists: artists});
    }
    else if (e.target.value === "age") {
      artists = this.sortAge(this.props.artistsList);
      this.setState({sortedArtists: artists});
    }
    else if (e.target.value === "random") {
      artists = this.sortRandom(this.props.artistsList);
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
    const { artistsList, actions } = this.props;

    let artistComponents;

    if (this.state.sortedArtists.length) {
      artistComponents = this.state.sortedArtists.map(a => <ArtistCard key={a.id} artist={a} actions={actions}/>)
    }
    else if (artistsList.length) {
      artistComponents = artistsList.map(a => <ArtistCard key={a.id} artist={a} actions={actions}/>)
    }

    return (
      <div>
        <div className="artists-container wrapper">

        <ArtistSortingSelect onChange={this.handleSelection}/>

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

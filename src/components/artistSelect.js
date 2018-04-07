import React, { Component } from 'react';

class ArtistSelect extends Component {

  render() {
    return (
      <select className="artist-select">
        <option selected>Sort Artists</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
        <option value="random">Randomize</option>
      </select>
    );
  }
}

export default ArtistSelect;

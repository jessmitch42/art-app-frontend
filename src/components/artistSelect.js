import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class ArtistSelect extends Component {
  handleSelection = (e) => {
    console.log(e)
    // dispatch(actions.sortArtistList(key))
  }

  render() {
    return (
      <select className="artist-select" onChange={e => this.handleSelection(e)}>
        <option selected>Sort Artists</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
        <option value="random">Random</option>
      </select>
    );
  }
}

export default connect()(ArtistSelect);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class ArtistSortingSelect extends Component {
  render() {
    return (
      <select
        className="artist-select"
        onChange={this.props.onChange.bind(this)}>

        <option selected>Sort Artists</option>
        <option value="ascending">A-Z</option>
        <option value="age">Youngest-Oldest</option>
        <option value="random">Random</option>

      </select>
    )
  }
}

export default ArtistSortingSelect;

import React, { Component } from 'react';
import * as actions from '../actions/artActions';

// import Artwork from './artwork'

class ArtworksContainer extends Component {
  componentDidMount() {
    console.log("in Artowrk componentDidMount")
    console.log(actions)

    actions.fetchArtworks(this.props.artistId);
    console.log("in if statement for fetchArtworks (App)")
  }

  render() {
    return (
      <div className="artwork__container">
          Im an artwork
      </div>
    )
  }
}
export default ArtworksContainer;

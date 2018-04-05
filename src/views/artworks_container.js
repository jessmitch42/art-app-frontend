import React, { Component } from 'react';
// import Artwork from './artwork'

class ArtworksContainer extends Component {
  componentDidMount() {
    console.log("in Artowrk componentDidMount")
    // let artistId = this.props.match.params.artistId;
    // this.props.actions.fetchArtworks(artistId);
    // console.log("in if statement for fetchArtworks (App)")
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

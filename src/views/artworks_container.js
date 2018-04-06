import React, { Component } from 'react';
import * as artActions from '../actions/artActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import Artwork from './artwork'

class ArtworksContainer extends Component {
  componentDidMount() {
    console.log("in Artowrk componentDidMount")
    console.log(this.props)
    this.props.artActions.fetchArtworks(this.props.artistId);
  }

  render() {
    const currentArtistArtworks = this.props.currentArtistArtwork;
    console.log(currentArtistArtworks)
    return (
      <div className="artwork__container">
          Im an artwork
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("in App mapStateToProps")
  console.log(state)
  return {
    currentArtistArtwork: state.artworks,
  };
};

function mapDispatchToProps(dispatch) {
  console.log("in App mapDispatchToProps")
  return {
    artActions: bindActionCreators(artActions, dispatch)
  };
}


export const ConnectedArtworksContainer = connect(mapStateToProps, mapDispatchToProps)(ArtworksContainer);

import React, { Component } from 'react';
import * as actions from '../actions/artActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import Artwork from './artwork'

class ArtworksContainer extends Component {
  componentDidMount() {
    console.log("in Artowrk componentDidMount")
    console.log(actions)

    actions.fetchArtworks(this.props.artistId);
    console.log("in if statement for fetchArtworks (App)")
  }

  render() {
    // const currentArtistArtworks = this.props.
    return (
      <div className="artwork__container">
          Im an artwork
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("in App mapStateToProps")
  return {
    ...state,
    currentArtistArtwork: state.artworks,
  };
};

function mapDispatchToProps(dispatch) {
  console.log("in App mapDispatchToProps")
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export const ConnectedArtworksContainer = connect(mapStateToProps, mapDispatchToProps)(ArtworksContainer);

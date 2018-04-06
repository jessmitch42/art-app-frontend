import React, { Component } from 'react';
import * as artActions from '../actions/artActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FlipMove from 'react-flip-move';

import Artwork from '../components/artwork'
import ArtistCompleteInfo from '../components/artistCompleteInfo';

class showArtworksContainer extends Component {
  componentDidMount() {
    console.log("in Artowrk componentDidMount")

    this.props.artActions.fetchArtworks(this.props.artistId);
  }

  render() {
    const currentArtistArtworks = this.props.currentArtistArtwork.map(a => <Artwork artwork={a} key={a.id}/>);
    return (
        <div className="artwork-container wrapper">
        
          <ArtistCompleteInfo artist={this.props.currentArtist}/>

          <FlipMove
            staggerDelayBy={100}>
            {currentArtistArtworks}
          </FlipMove>

        </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log("in App mapStateToProps")
  return {
    currentArtistArtwork: state.artworks,
    currentArtist: findCurrentArtistInState(state)
  };
};

function findCurrentArtistInState(state) {
  return state.artists.filter(a => a.id === state.global.currentArtistId)[0]
}

function mapDispatchToProps(dispatch) {
  console.log("in App mapDispatchToProps")
  return {
    artActions: bindActionCreators(artActions, dispatch)
  };
}


export const ConnectedShowArtworksContainer = connect(mapStateToProps, mapDispatchToProps)(showArtworksContainer);

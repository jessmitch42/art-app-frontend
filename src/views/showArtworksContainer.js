import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FlipMove from 'react-flip-move';

import ArtworkFlipContainer from '../components/artworkFlipContainer'
import ArtistCompleteInfo from '../components/artistCompleteInfo';

class showArtworksContainer extends Component {
  componentDidMount() {
    console.log("in Artowrk componentDidMount")

    this.props.actions.fetchArtworks(this.props.artistId);
  }

  render() {
    const currentArtistArtworks = this.props.currentArtistArtwork.map(a => <ArtworkFlipContainer artwork={a} key={a.id}/>);
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
    actions: bindActionCreators(actions, dispatch)
  };
}


export const ConnectedShowArtworksContainer = connect(mapStateToProps, mapDispatchToProps)(showArtworksContainer);

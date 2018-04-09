import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FlipMove from 'react-flip-move';

import ArtworkFlipContainer from '../components/artworkFlipContainer'
import ArtistCompleteInfo from '../components/artistCompleteInfo';


class Artworks extends Component {
  componentDidMount() {
    console.log("in Artowrk componentDidMount")

    this.props.actions.fetchArtworks(this.props.match.params.artistId);
  }

  render() {
    console.log(this.props.match.params.artistId)

    const filterArtists = this.props.artistsList.filter(a => a.id == this.props.match.params.artistId);
    const currentArtist = filterArtists[0] ? filterArtists[0] : {};
    const currentArtistArtworks = this.props.currentArtistArtwork.map(a => <ArtworkFlipContainer artwork={a} key={a.id}/>);

    return (
        <div className="artwork-container wrapper">
          <ArtistCompleteInfo artist={currentArtist}/>
          <FlipMove
            staggerDelayBy={100}>
            {currentArtistArtworks}
          </FlipMove>
        </div>

    )
  }
};


export default Artworks;

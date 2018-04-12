import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import  { Redirect } from 'react-router-dom';

import ArtworkFlipContainer from '../components/artworkFlipContainer'
import ArtistCompleteInfo from '../components/artistCompleteInfo';


class ShowArtworksContainer extends Component {
  componentDidMount() {
    const { actions, match } = this.props;

    actions.fetchArtworks(match.params.artistId);
  }

  // TODO: error handling is artist id doesn't match artists in state

  render() {
    const { artistsList, match, currentArtistArtwork } = this.props;
    const filterArtists = artistsList.filter(a => a.id == match.params.artistId);

    const currentArtist = filterArtists[0] ? filterArtists[0] : false;

    const currentArtworksMapped = currentArtistArtwork.map(a =>
        <ArtworkFlipContainer artwork={a} key={a.id}/>);

    return (
        <div className="artwork-container wrapper">

          { currentArtist ?
            <ArtistCompleteInfo artist={currentArtist}/> :
            <Redirect to="/artists" />
          }

          <FlipMove
            staggerDelayBy={100}>
            {currentArtworksMapped}
          </FlipMove>

        </div>

    )
  }
};


export default ShowArtworksContainer;

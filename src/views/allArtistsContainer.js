import React, { Component } from 'react';
import ArtistPreview from '../components/artistPreview';
import ArtistSelect from '../components/artistSelect';

import FlipMove from 'react-flip-move';

class AllArtistsContainer extends Component {

  render() {
    return (
      <div>
        <div className="artists-container wrapper">
        <ArtistSelect />
          <FlipMove
            staggerDelayBy={130}>
            {this.props.artists.map(a => <ArtistPreview key={a.id} artist={a} actions={this.props.globalActions}/>)}
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default AllArtistsContainer;

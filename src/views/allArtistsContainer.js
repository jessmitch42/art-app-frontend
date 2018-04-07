import React from 'react';
import ArtistPreview from '../components/artistPreview';
import ArtistSelect from '../components/artistSelect';

import FlipMove from 'react-flip-move';

const AllArtistsContainer = (props) => {
  console.log("in Artists")

  let artistPreviews = !props.loading ? props.artists.map(a => <ArtistPreview key={a.id} artist={a} actions={props.globalActions}/>) : "";

  return (
    <div>
      <div className="artists-container wrapper">
      <ArtistSelect />
        <FlipMove
          staggerDelayBy={130}>
          {artistPreviews}
        </FlipMove>
      </div>
    </div>
  );
}

export default AllArtistsContainer;

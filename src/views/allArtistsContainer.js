import React from 'react';
import ArtistPreview from '../components/artistPreview';
import FlipMove from 'react-flip-move';

const AllArtistsContainer = (props) => {
  console.log("in Artists")

  let artistPreviews = !props.loading ? props.artists.map(a => <ArtistPreview key={a.id} artist={a} actions={props.globalActions}/>) : "";

  return (
    <div className="artists-container wrapper">
      <FlipMove
        staggerDelayBy={130}>
        {artistPreviews}
      </FlipMove>
    </div>
  );
}

export default AllArtistsContainer;
